import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserData } from './user-data.model';

export interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean,
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  userData = new BehaviorSubject<UserData | null>(null);
  private tokenExpirationTimer: any;
  usersData: UserData[] = [];

  constructor(private _http: HttpClient, private _router: Router) { }

  signup(email: string, password: string) {
    return this._http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAqhDOUUFL3jJ1eiaNEYa3-4-gBvsWyyN4',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    ).pipe(
      tap((resData) => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
      })
    )
  }

  login(email: string, password: string) {
    return this._http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAqhDOUUFL3jJ1eiaNEYa3-4-gBvsWyyN4',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    ).pipe(
      tap((resData) => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
      })
    )
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + (expiresIn * 1000));
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  autoLogin() {
    const userData: { email: string, id: string, _token: string, _tokenExpirationDate: string } = JSON.parse(localStorage.getItem('userData')!);
    if (!userData) {
      this.logout();
      return;
    }
    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
    if (loadedUser.token) {
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.user.next(loadedUser);
      // this.userData.next(loadedUser);
      console.log(loadedUser);

      this.getCurrentUser(loadedUser.id);
      this.autoLogout(expirationDuration);
    } else {
      this.logout();
    }
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout()
    }, expirationDuration)
  }

  logout() {
    this.user.next(null);
    this._router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
    this.userData.next(null);
  }

  addUserData(userData: UserData) {
    return this._http.post('https://kanban-board-1448e-default-rtdb.firebaseio.com/users.json', userData);
  }

  getUsersData() {
    return this._http.get('https://kanban-board-1448e-default-rtdb.firebaseio.com/users.json');
  }

  getCurrentUser(userId: string) {
    this.getUsersData().pipe(
      tap((users: any) => {
        let arrOfUsers: UserData[] = [];
        arrOfUsers = Object.values(users);
        arrOfUsers.forEach((user: UserData) => {
          if (user.userId === userId) {
            this.userData.next(user);
          }
        })
      })
    ).subscribe();
  }

  updateUserData(index: string, userData: UserData) {
    return this._http.put('https://kanban-board-1448e-default-rtdb.firebaseio.com/users/' + index + '.json', userData);
  }
}
