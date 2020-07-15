import { Component, OnInit } from '@angular/core';
import { TodosServerService } from './core/services/todos-server.service';
import { Store } from '@ngrx/store';
import { retrieveAllTodos } from './redux/todos/todos.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private todosServerService: TodosServerService, private store: Store) {

  }

  ngOnInit(): void {
    this.store.dispatch(retrieveAllTodos());
  }
}
