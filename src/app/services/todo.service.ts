import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Todo } from '../modules/Todo';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private BASE_URL:string = 'https://jsonplaceholder.typicode.com/todos';
  private limit:string = '?_limit=5';

  constructor(private http:HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.BASE_URL}${this.limit}`);
  }

  toggleCompleted(todo):Observable<any>{
    const url = `${this.BASE_URL}/${todo.id}`;

    return this.http.put(url,todo,httpOptions);
  }

  deleteTodo(todo:Todo):Observable<any>{
    const url = `${this.BASE_URL}/${todo.id}`;

    return this.http.delete(url,httpOptions);
  }

  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.BASE_URL,todo,httpOptions);
  }

}
