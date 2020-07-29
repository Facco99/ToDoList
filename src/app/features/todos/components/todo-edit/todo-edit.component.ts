import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Todo } from 'src/app/core/model/todo';
import { TodoFacadeService } from '../../services/todo-facade.service';
import { Store, select } from '@ngrx/store';
import { getCurrentNavigatedTodo } from 'src/app/redux/todos';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent{

  private subscription: Subscription = new Subscription();
  get todo():Observable<Todo>{
    return this.store.pipe(select(getCurrentNavigatedTodo));
  }

  constructor(private todosFacadeService: TodoFacadeService, private store:Store) {
  }

  editForm(todo: Todo) {
    this.todosFacadeService.editTodo(todo);
  }

  undo(todo: Todo) {
    this.todosFacadeService.goToDetail(todo.id);
  }

}
