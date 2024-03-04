import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BoardComponent } from "./board/board.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { TaskEditComponent } from "./task-edit/task-edit.component";

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: BoardComponent },
      { path: 'details', component: TaskDetailsComponent },
      { path: 'edit/:id', component: TaskEditComponent },
      { path: 'new/:status', component: TaskEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
