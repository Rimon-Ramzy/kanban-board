import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { BoardRoutingModule } from './board-routing.module';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';



@NgModule({
  declarations: [
    BoardComponent,
    TaskCardComponent,
    TaskDetailsComponent,
    TaskEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuillModule.forRoot(),
    BoardRoutingModule,
  ]
})
export class BoardModule { }
