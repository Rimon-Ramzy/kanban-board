import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { UserData } from '../../auth/user-data.model';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.scss'
})
export class TaskEditComponent implements OnInit {
  colors: {} =
    {
      color1: '#e1d2f1',
      color2: '#ddffc2',
      color3: '#fdfede',
      color4: '#fde6ba',
      color5: '#fcccd8',
      color6: '#fee8ff',
      color7: '#dffff4',
      color8: '#c9ddfe',
    }
  colorsArr: string[] = Object.values(this.colors);
  minDate: string;
  currentStatus!: string;
  currentUser!: UserData;
  editMode: boolean = false;

  title!: string;
  description: string = '';
  color!: string;
  currentDate: Date | string;
  taskId?: string;

  loadSpinner: boolean = false;

  taskInfo: any;

  quillConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'size': ['xsmall', 'small', 'medium', 'large', 'xlarge'] }],
        [{ 'align': [] }],
        ['clean'],
        ['link']
      ]
    }
  }






  todos: string[] = [];
  newTodo: string = '';
  isConnected: boolean = false;

  constructor(private _route: ActivatedRoute, private authService: AuthService, private boardService: BoardService, private _router: Router) {
    this.currentDate = this.currentDateForamt(new Date());
    const currentDate = new Date();
    this.minDate = currentDate.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getMode();
    this.initForm();
  }

  initForm() {
    if (this.editMode) {
      this.taskId = this._route.snapshot.params['id'];
      this.boardService.getCertienTask(this.taskId!).subscribe(
        (task: Task) => {
          this.title = task.title;
          this.description = task.description;
          this.color = task.color;
          this.currentDate = task.dueDate;
          this.currentStatus = task.status;
        }
      );
    } else {
      this.currentStatus = this._route.snapshot.params['status'];
    }
  }

  getMode() {
    if (this._route.snapshot.params['id']) {
      this.editMode = true;
    } else {
      this.editMode = false;
    }
  }

  getCurrentUser() {
    this.authService.userData.subscribe(
      user => {
        this.currentUser = user!;
      }
    )
  }


  currentDateForamt(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}-${month}-${year}`;
  }

  onSubmit(taskForm: NgForm) {
    this.loadSpinner = true;
    const taskInfo: Task = {
      ...taskForm.value,
      status: this.currentStatus,
      createdBy: this.currentUser.displayName,
      userId: this.currentUser.userId
    }

    if (this.editMode) {
      this.boardService.updateTask(this.taskId!, taskInfo).subscribe(
        res => {
          this.loadSpinner = false;
          this._router.navigate(['/board']);
        },
        (error) => {
          this.loadSpinner = false;
          alert(error.error.error.message);
        }
      );
    } else {
      this.boardService.addTask(taskInfo).subscribe(
        res => {
          this.loadSpinner = false;
          this._router.navigate(['/board'])
        },
        (error) => {
          this.loadSpinner = false;
          alert(error.error.error.message);
        }
      );
    }
  }
}
