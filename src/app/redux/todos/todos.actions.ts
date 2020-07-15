import { createAction, props } from '@ngrx/store';
import { Todo } from '../../core/model/todo';

export const initTodos = createAction('[Todos] Init', props<{todos: Todo[]}>());
export const insertTodo = createAction('[Todos] Insert', props<{todo: Todo}>());
export const removeTodo = createAction('[Todos] Remove', props<{id: number}>());
export const editTodo = createAction('[Todos] edit', props<{todo: Todo}>());
export const retrieveAllTodos =  createAction('[Todos] retrieve all'); 
export const updateTodo = createAction('[Todo] update', props<{todo: Todo}>());
export const postTodo = createAction('[Todo] add to server', props<{todo: Todo}>());