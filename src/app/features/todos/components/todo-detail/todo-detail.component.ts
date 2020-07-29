import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Todo } from 'src/app/core/model/todo';
import { ActivatedRoute } from '@angular/router';
import { TodoFacadeService } from '../../services/todo-facade.service';
import { Store, select } from '@ngrx/store';
import { getCurrentNavigatedTodo } from 'src/app/redux/todos';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent {

  constructor(private todosFacadeService: TodoFacadeService, private route: ActivatedRoute,private store:Store) {
  }

  get todo(): Observable<Todo>{
    return this.store.pipe(select(getCurrentNavigatedTodo));
  }

  edit(todo: Todo){
    this.todosFacadeService.goToEdit(todo.id);
  }

}
