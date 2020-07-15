import { goToTodosHome } from './../../features/todos/redux/todos-navigation.actions';
import { HttpCommunicationsService } from './../../core/http-communications/http-communications.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { retrieveAllTodos, initTodos, updateTodo, editTodo, postTodo, insertTodo } from './todos.actions';
import { switchMap, map, concatMap, withLatestFrom } from 'rxjs/operators';
import { Todo } from 'src/app/core/model/todo';
import { goToDetail } from 'src/app/features/todos/redux/todos-navigation.actions';
import { Action, select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { getCurrentUser } from '..';

@Injectable()
export class TodosEffects {

    retrieveAllTodos$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllTodos),
        switchMap(() => this.httpCommunicationsService.retrieveGetCall<Todo[]>("todos").pipe(
            map(todos => initTodos({ todos }))
        ))
    ));

    constructor(private actions$: Actions,  private store: Store,
        private httpCommunicationsService: HttpCommunicationsService) {
    }

    updateTodo$ = createEffect(() => this.actions$.pipe(
        ofType(updateTodo),
        switchMap(action => this.httpCommunicationsService.retrievePutCall<Todo>("todos/" + action.todo.id, action.todo).pipe(
            switchMap(todo => [editTodo({ todo }), goToDetail({ id: todo.id })])
        ))
    ));

    insertTodo$ = createEffect(() => this.actions$.pipe(
        ofType(postTodo),
        withLatestFrom(this.store.pipe(select(getCurrentUser))),
        map(([action, user]) => ({
            ...action.todo,
            users: [user.username]
        })),
        switchMap(todo => this.httpCommunicationsService.retrievePostCall<Todo>("todos", todo).pipe(
            switchMap(todo => [insertTodo({ todo }), goToTodosHome()])
        ))
    ))
}