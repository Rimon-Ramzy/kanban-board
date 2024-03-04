import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Task } from '../board/task.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  openProfileChanged = new BehaviorSubject<boolean>(false);
  // newNotifivation = new Subject<Task>();
  isAdd = new BehaviorSubject<string>('add');

  constructor() { }
  // setNotification(task: Task) {
  //   this.newNotifivation.next(task);
  // }
}
