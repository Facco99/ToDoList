import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from 'src/app/core/model/todo';
import { Router } from '@angular/router';
import { TodosServerService } from 'src/app/core/services/todos-server.service';
import { Store } from '@ngrx/store';
import { initTodos, editTodo, insertTodo, updateTodo } from 'src/app/redux/todos/todos.actions';

@Injectable({
  providedIn: 'root'
})
export class TodoFacadeService {

  constructor(private todosServerService: TodosServerService, private router: Router, private store:Store) { }

  editTodo(todo: Todo) {
    this.store.dispatch(updateTodo({todo}));
  }

  addTodo(todo: Todo) {
    this.todosServerService.insertTodo(todo).subscribe((item: Todo) => {
      this.store.dispatch(insertTodo({todo: item}));
      this.router.navigateByUrl("/todos");
    });
  }

  goToDetail(id: number) {
    this.router.navigateByUrl('/todos/detail/' + id);
  }
  
  goToEdit(id: number) {
    this.router.navigateByUrl('/todos/edit/' + id);
  }
}
