import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { UserData } from '../../auth/user-data.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  userData?: UserData;
  showProfile: boolean = false;

  constructor(private authService: AuthService, private sharedService: SharedService) { }
  ngOnInit(): void {
    this.authService.userData.subscribe(
      (userData: any) => {
        console.log(userData);

        this.userData = userData;
        if (userData?.showNotification != undefined) {
          localStorage.setItem('showNotification', JSON.stringify(userData?.showNotification));
        }
      }
    );

    this.sharedService.openProfileChanged.subscribe(
      (res: boolean) => {
        this.showProfile = res;
      }
    );
  }

  openProfile() {
    this.sharedService.openProfileChanged.next(true);
  }

  onLogout() {
    this.authService.logout();
  }
}
