import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Details } from './details.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private _http: HttpClient) { }

  addTask(task: Task): Observable<Task> {
    return this._http.post<{ name: string }>('https://kanban-board-1448e-default-rtdb.firebaseio.com/tasks.json', task)
      .pipe(
        map(response => {
          // Update the task object with the generated key
          const taskId = response.name;
          return { ...task, id: taskId };
        })
      )
  }

  fetchAllTasks() {
    return this._http.get<Task[]>('https://kanban-board-1448e-default-rtdb.firebaseio.com/tasks.json').pipe(
      map(
        (res) => {
          let arrayOfObjects = []
          for (let key in res) {
            arrayOfObjects.push({ ...res[key], id: key });
          }
          return arrayOfObjects
        }
      )
    );
  }

  updateTask(index: string, newTask: Task) {
    return this._http.put<Task>('https://kanban-board-1448e-default-rtdb.firebaseio.com/tasks/' + index + '.json', newTask);
  }

  getCertienTask(index: string) {
    return this._http.get<Task>('https://kanban-board-1448e-default-rtdb.firebaseio.com/tasks/' + index + '.json');
  }

  deleteCetienTask(index: string) {
    return this._http.delete('https://kanban-board-1448e-default-rtdb.firebaseio.com/tasks/' + index + '.json');
  }

  storeWorkInTask(workDet: Details): Observable<Details> {
    return this._http.post<{ name: string }>('https://kanban-board-1448e-default-rtdb.firebaseio.com/workDet.json', workDet).pipe(
      map((response: any) => {
        const id = response.name;
        return { ...workDet, id }
      })
    )
  }

  fetchWorkInTask() {
    return this._http.get<Details>('https://kanban-board-1448e-default-rtdb.firebaseio.com/workDet.json')
  }

  addNotification(notification: any) {
    return this._http.post('https://kanban-board-1448e-default-rtdb.firebaseio.com/notification.json', notification);
  }
  fetchNotification() {
    return this._http.get('https://kanban-board-1448e-default-rtdb.firebaseio.com/notification.json').pipe(
      map(
        (res: any) => {
          let arrayOfObjects = []
          for (let key in res) {
            arrayOfObjects.push({ ...res[key], id: key });
          }
          return arrayOfObjects
        }
      )
    );
  }
  deleteNotification(id: string) {
    return this._http.delete('https://kanban-board-1448e-default-rtdb.firebaseio.com/notification/' + id);
  }
}
