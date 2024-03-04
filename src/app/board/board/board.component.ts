import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../board.service';
import { Task } from '../task.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit {
  tasks: Task[] = [];
  currentUserId: string = '';
  currentItem: any;

  constructor(private _router: Router, private _route: ActivatedRoute, private boardService: BoardService, private _sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.getAllTasks();
    this.getCurrentUserId();
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
}
