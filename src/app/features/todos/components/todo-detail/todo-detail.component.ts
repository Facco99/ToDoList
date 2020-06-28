import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/model/todo';
import { ActivatedRoute } from '@angular/router';
import { TodoFacadeService } from '../../services/todo-facade.service';
import { Store, select } from '@ngrx/store';
import { getTodoById } from 'src/app/redux';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  todo:Todo;

  constructor(private todosFacadeService: TodoFacadeService, private route: ActivatedRoute,private store:Store) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params != null && params['id'] != null) {
        this.store.pipe(select(getTodoById, { id: Number(params['id']) })).subscribe(todo => {
          this.todo = todo;
        });
      }
    });
  }

  edit(todo: Todo){
    this.todosFacadeService.goToEdit(todo.id);
  }

}
