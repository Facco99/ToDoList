import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {filter, map} from 'rxjs/operators';
import { Todo } from '../model/todo';
import { HttpCommunicationsService } from '../http-communications/http-communications.service';

@Injectable({
  providedIn: 'root'
})
export class TodosServerService {
  constructor(private httpCommunications: HttpCommunicationsService) { }
  
  insertTodo(todo: Todo): Observable<Todo>{
    return this.httpCommunications.retrievePostCall("todos", todo);
  }
}
