import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from 'src/app/core/model/todo';
import { Router } from '@angular/router';
import { TodosServerService } from 'src/app/core/services/todos-server.service';

@Injectable({
  providedIn: 'root'
})
export class TodoFacadeService {

  private todsSubject: BehaviorSubject<Todo[]> = new BehaviorSubject(null);
  tods$ = this.todsSubject.asObservable();

  private todSelectedSubject: BehaviorSubject<Todo> = new BehaviorSubject(null);
  todoSelected$ = this.todSelectedSubject.asObservable();

  constructor(private todosServerService: TodosServerService, private router: Router) { }

  getAllTodos() {
    this.todosServerService.retrieveAllTodos().subscribe(todos => {
      this.todsSubject.next(todos);
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