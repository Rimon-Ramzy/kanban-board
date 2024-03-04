import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../board/task.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {
  title = "firebase-app";
  @Input() newTask: any = '';
  notificationMode: string = '';
  constructor(private sharedService: SharedService) { }
  ngOnInit(): void {
  }
}
