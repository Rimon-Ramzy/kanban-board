import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { UserData } from '../../auth/user-data.model';
import { SharedService } from '../shared.service';
import { Socket } from 'ngx-socket-io';
import { BoardService } from '../../board/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  userData?: UserData;
  showProfile: boolean = false;

  notifications: any[] = [];
  newTaskId: string = '';
  newNotification: boolean = false;

  constructor(private authService: AuthService, private sharedService: SharedService, private socket: Socket, private boardService: BoardService, private _router: Router) { }
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

    this.socket.fromEvent('new-notification').subscribe((notification: any) => {
      this.notifications.unshift(notification);
      this.newTaskId = notification.taskId;
      this.newNotification = notification.new;
    });


    this.onShowNotification();
  }

  openProfile() {
    this.sharedService.openProfileChanged.next(true);
  }

  onLogout() {
    this.authService.logout();
  }

  onShowNotification() {
    this.boardService.fetchNotification().subscribe(
      res => {
        res.map(
          item => {
            if (item.time === new Date(new Date().getTime()).getTime()) {
              this.deleteOlderNotification(item.id);
            }
            if (item.createdBy !== this.userData?.displayName) {
              this.notifications.unshift(item);
            }
          }
        )
      }
    )
  }

  deleteOlderNotification(id: string) {
    this.boardService.deleteNotification(id)
  }

  openNotifications() {
    const list: any = document.querySelector(".list");
    list.classList.toggle('open');
  }

  goToDetails(taskId: string) {
    console.log(taskId);
    if (taskId === undefined) {
      console.log(this.newTaskId);
      this._router.navigate(['/board/details', this.newTaskId]);
    } else {
      this._router.navigate(['/board/details', taskId]);
    }
  }
}
