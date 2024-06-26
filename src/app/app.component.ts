import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Task } from './board/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  currentUrl?: string;
  loading: boolean = false;
  userData?: Observable<any>;
  newTask!: Task;
  showNotification: boolean = false;
  @ViewChild('notification') notification: any;

  constructor(private authService: AuthService, private _router: Router) { }
  ngOnInit(): void {
    this.userData = this.authService.userData
    this.authService.autoLogin();
    this.authService.autoLogout;
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentUrl = this._router.url;
    });
  }

}
