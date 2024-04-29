import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../board.service';
import { Task } from '../task.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Details } from '../details.model';
import { AuthService } from '../../auth/auth.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit {
  tasks: Task[] = [];
  currentUserId: string = '';
  currentUsername: string = '';
  currentItem: any;
  isAdmin: boolean = false;

  timerDisplay: string = '00:00:00';
  timer: any;
  startTime: number = 0;
  isStoring: boolean = false;
  hours: number = 0;
  minutes: number = 0;

  activeTaskIndex: number | null = null;

  constructor(private _router: Router, private _route: ActivatedRoute, private boardService: BoardService, private _sanitizer: DomSanitizer, private authService: AuthService) { }
  ngOnInit(): void {
    this.getAllTasks();
    this.getCurrentUserId();
    this.getCurrentUserName();
    this.currentUserIsAdmin();


    if (localStorage.getItem('startTime') !== null) {
      this.isStoring = true;
      const index = +(localStorage.getItem('activeTaskIndex')!)
      console.log(index);
      this.onStartWork(index);
    }
  }

  getAllTasks(): Subscription {
    return this.boardService.fetchAllTasks().subscribe(
      (res) => {
        this.tasks = res;
        return res;
      }
    )

  }
  getCurrentUserId(): string {
    return this.currentUserId = JSON.parse(localStorage.getItem('userData')!).id;
  }
  getCurrentUserName() {
    this.authService.userData.subscribe(
      (res: any) => {
        this.currentUsername = res.displayName
      }
    );
  }
  currentUserIsAdmin() {
    this.authService.userData.subscribe(
      (res: any) => {
        if (res.isAdmin === true) {
          this.isAdmin = true;
        }
      }
    );
  }
  getSanitizedHtml(html: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
  onAddTask(status: String) {
    this._router.navigate(['new', status], { relativeTo: this._route })
  }
  onEditTask(id: string, status: string) {
    this._router.navigate(['edit', id], { relativeTo: this._route });
  }
  onDeleteTask(index: string, i: number) {
    this.boardService.deleteCetienTask(index).subscribe();
  }

  onDragStart(item: any) {
    this.currentItem = item;
  }

  onDrop(event: any, status: string) {
    event.preventDefault();
    const record = this.tasks.find(m => m.id == this.currentItem!.id);
    if (record != undefined) {
      const newTask: Task = record;
      record.status = status;
      this.currentItem = null;
      newTask.status = status;
      this.boardService.updateTask(newTask.id!, newTask).subscribe();
    }
  }
  onDragOver(event: any) {
    event.preventDefault();
  }

  onStartWork(index: any): void {
    this.activeTaskIndex = index;
    if (this.activeTaskIndex !== null) {
      localStorage.setItem('activeTaskIndex', JSON.stringify(this.activeTaskIndex))
    }
    if (localStorage.getItem('startTime') === null) {
      this.startTime = Date.now();
    } else {
      this.startTime = +(localStorage.getItem('startTime')!)
    }
    this.timer = setInterval(() => {
      this.updateTimerDisplay();
    }, 1000);
  }

  updateTimerDisplay(): void {
    const elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
    this.hours = Math.floor(elapsedTime / 3600);
    this.minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    this.timerDisplay = `${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}:${this.formatTime(seconds)}`;
    localStorage.setItem('startTime', JSON.stringify(this.startTime));
  }

  formatTime(time: number): string {
    return time < 10 ? `0${time}` : `${time}`;
  }

  onEndWork(task: Task) {
    const hourSalary: number = +task.hourSalary
    const minuteSalary = parseFloat((hourSalary / 60).toFixed(1));
    const salaryInMinutes: number = this.minutes * minuteSalary;
    const salaryInHours: number = this.hours * +task.hourSalary;
    const salary: number = salaryInHours + salaryInMinutes;
    console.log(this.timerDisplay);

    const workDet: Details = {
      userName: this.currentUsername,
      userId: this.currentUserId,
      taskId: task.id!,
      taskTitle: task.title,
      salary: salary,
      timer: this.timerDisplay,
    }
    this.boardService.storeWorkInTask(workDet).subscribe();
    localStorage.removeItem('startTime');
    localStorage.removeItem('activeTaskIndex');
    clearInterval(this.timer);
    this.timer = null;
    this.isStoring = false;
    this.timerDisplay = '00:00';
    this.startTime = 0;
    this.activeTaskIndex = null;
  }
}
