import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/model/todo';
import { TodoFacadeService } from '../../services/todo-facade.service';
import { Store, select } from '@ngrx/store';
import { selectTodos } from 'src/app/redux';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  get todosList(): Observable<Todo[]> {
    return this.store.pipe(select(selectTodos));
  }

  constructor(private todosFacadeService: TodoFacadeService, private store: Store) { }

  ngOnInit(): void {
    this.todosFacadeService.getAllTodos();
  }

  showDetail(todo: Todo) {
    this.todosFacadeService.goToDetail(todo.id);
  }

}
