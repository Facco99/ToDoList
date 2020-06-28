import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Todo } from 'src/app/core/model/todo';
import { ActivatedRoute } from '@angular/router';
import { TodoFacadeService } from '../../services/todo-facade.service';
import { Store, select } from '@ngrx/store';
import { getTodoById } from 'src/app/redux';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  todo:Todo;

  constructor(private todosFacadeService: TodoFacadeService, private route: ActivatedRoute,private store:Store) {
  }

  ngOnInit(): void {
    this.subscription.add(this.route.params.pipe(
      filter(params => params != null && params['id'] != null),
      switchMap(params => this.store.pipe(select(getTodoById, { id: Number(params['id']) }))),
    ).subscribe(todo => {
      this.todo = todo;
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  edit(todo: Todo){
    this.todosFacadeService.goToEdit(todo.id);
  }

}
