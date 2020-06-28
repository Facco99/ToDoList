import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from 'src/app/core/model/todo';
import { Router } from '@angular/router';
import { TodosServerService } from 'src/app/core/services/todos-server.service';
import { Store } from '@ngrx/store';
import { initTodos } from 'src/app/redux/todos/todos.actions';

@Injectable({
  providedIn: 'root'
})
export class TodoFacadeService {

  private todSelectedSubject: BehaviorSubject<Todo> = new BehaviorSubject(null);
  todoSelected$ = this.todSelectedSubject.asObservable();

  constructor(private todosServerService: TodosServerService, private router: Router, private store:Store) { }

  getAllTodos() {
    this.todosServerService.retrieveAllTodos().subscribe(todos => {
      this.store.dispatch(initTodos({todos}))
    });
  }

  editTodo(todo: Todo) {
    this.todosServerService.updateTodo(todo).subscribe(() => {
      this.getAllTodos();
      this.goToDetail(todo.id);
    });
  }

  addTodo(todo: Todo) {
    this.todosServerService.insertTodo(todo).subscribe(() => {
      this.getAllTodos();
      this.router.navigateByUrl("/todos");
    });
  }

  getTodoById(id: number) {
    this.todosServerService.retrieveTodoById(id).subscribe(todo => {
      this.todSelectedSubject.next(todo);
    });
  }

  goToDetail(id: number) {
    this.router.navigateByUrl('/todos/detail/' + id);
  }
  
  goToEdit(id: number) {
    this.router.navigateByUrl('/todos/edit/' + id);
  }
}
