import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/model/todo';
import { ActivatedRoute } from '@angular/router';
import { TodoFacadeService } from '../../services/todo-facade.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  get todo(): Observable<Todo> {
    return this.todosFacadeService.todoSelected$;
  }

  constructor(private todosFacadeService: TodoFacadeService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params != null && params['id'] != null){
        this.todosFacadeService.getTodoById(params['id']);
      }
    });
  }

  editForm(todo: Todo) {
    this.todosFacadeService.editTodo(todo);
  }

  undo(todo: Todo) {
    this.todosFacadeService.goToDetail(todo.id);
  }

}
