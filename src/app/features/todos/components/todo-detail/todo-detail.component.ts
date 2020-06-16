import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/model/todo';
import { ActivatedRoute } from '@angular/router';
import { TodoFacadeService } from '../../services/todo-facade.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

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

  edit(todo: Todo){
    this.todosFacadeService.goToEdit(todo.id);
  }

}
