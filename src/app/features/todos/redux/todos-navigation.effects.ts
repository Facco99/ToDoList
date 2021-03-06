import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { goToDetail, goToTodosHome } from './todos-navigation.actions';
import { tap } from 'rxjs/operators';
import { TodoFacadeService } from '../services/todo-facade.service';

@Injectable()
export class TodosNavigationEffects {

    goToDetail$ = createEffect(() => this.actions$.pipe(
        ofType(goToDetail),
        tap(action => {
            this.todosFacadeService.goToDetail(action.id);
        })
    ), { dispatch: false });

    constructor(private actions$: Actions,
        private todosFacadeService: TodoFacadeService) {
    }

    goToTodosHome$ = createEffect(() => this.actions$.pipe(
        ofType(goToTodosHome),
        tap(() => {
            this.todosFacadeService.goToTodosHome();
        })
    ), { dispatch: false });
} 