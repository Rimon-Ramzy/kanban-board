import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { map } from 'rxjs/operators';
import { Details } from '../details.model';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent implements OnInit {
  workDet: Details[] = [];
  userId: string = '';
  TaskId: string = '';
  currentTask?: Task;

  constructor(private boardService: BoardService, private authService: AuthService, private _route: ActivatedRoute, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getWorkDet();
    this.getCurrentUserData();

    this._route.params.subscribe(
      (res) => {
        console.log(res);

        this.TaskId = res['id']
        this.getCurrentTask();
      }
    )
    this.TaskId = this._route.snapshot.params['id'];
    this.getCurrentTask();
    console.log(this._route.snapshot.params['id']);

  }

  getCurrentUserData() {
    this.authService.userData.subscribe(
      (res: any) => {
        this.userId = res.userId;
      }
    )
  }

  getWorkDet() {
    this.boardService.fetchWorkInTask()
      .pipe(
        map((data: any) => {
          if (data === null || data === undefined) {
            return;
          }
          const array = Object.keys(data).map(key => data[key])
          return array.filter(item => item.taskId === this.TaskId);
        })
      )
      .subscribe(
        (res: any) => {
          this.workDet = res;
        }
      )
  }

  getCurrentTask() {
    this.boardService.getCertienTask(this.TaskId).subscribe(
      (res: Task | undefined) => {
        this.currentTask = res
      }
    )
  }

  getSanitizedHtml(html: any): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
}
