import { Injectable } from '@angular/core';
import { retrieveAllTodos, initTodos, updateTodo, editTodo } from './todos.actions';
import { switchMap, map } from 'rxjs/operators';
import { Todo } from 'src/app/core/model/todo';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpCommunicationsService } from 'src/app/core/http-communications/http-communications.service';
import { goToDetail } from 'src/app/features/todos/redux/todos-navigation.actions';

@Injectable()
export class TodosEffects {

    retrieveAllTodos$ = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllTodos),
        switchMap(() => this.httpCommunicationsService.retrieveGetCall<Todo[]>("todos").pipe(
            map(todos => initTodos({ todos }))
        ))
    ));

    constructor(private actions$: Actions,
        private httpCommunicationsService: HttpCommunicationsService) {
    }

    updateTodo$ = createEffect(() => this.actions$.pipe(
        ofType(updateTodo),
        switchMap(action => this.httpCommunicationsService.retrievePutCall<Todo>("todos/" + action.todo.id, action.todo).pipe(
            switchMap(todo => {
                return [editTodo({ todo }), goToDetail({id: todo.id})];
            })
        ))
    ));
}