import { AppState} from '..';
import { createSelector } from '@ngrx/store';
import { TodoState } from './todos.reducers';
import { Params } from '@angular/router';
import { selectRouteParams } from '../router';

export const selectTodosState = (state: AppState) => state.todoState;
export const selectTodos = createSelector(
    selectTodosState,
    (state: TodoState) => state.todos
);

export const getTodoById = createSelector(
    selectTodosState,
    (state: TodoState, props: { id: number }) => state.todos.find(item => item.id === props.id)
);

export const getCurrentNavigatedTodo = createSelector(
    selectTodosState,
    selectRouteParams,
    (state: TodoState, params: Params) => state.todos.find(item => item.id === Number(params['id']))
);

export const getFirstTodo = createSelector(
    selectTodosState,
    (state: TodoState) => state.todos.length > 0 ? state.todos[0] : null
);