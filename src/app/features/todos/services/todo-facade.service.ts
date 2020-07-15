import { Injectable } from '@angular/core';
import { Todo } from 'src/app/core/model/todo';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateTodo, postTodo } from 'src/app/redux/todos/todos.actions';

@Injectable({
  providedIn: 'root'
})
export class TodoFacadeService {

  constructor(private router: Router, private store:Store) { }

  editTodo(todo: Todo) {
    this.store.dispatch(updateTodo({todo}));
  }

  addTodo(todo: Todo) {
    this.store.dispatch(postTodo({todo}));
  }

  goToDetail(id: number) {
    this.router.navigateByUrl('/todos/detail/' + id);
  }
  
  goToEdit(id: number) {
    this.router.navigateByUrl('/todos/edit/' + id);
  }
}
