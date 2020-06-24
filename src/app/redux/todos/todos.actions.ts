import { createAction, props } from '@ngrx/store';
import { Todo } from '../../core/model/todo';

export const initTodos = createAction('[Todos] Init', props<{todos: Todo[]}>());
export const insertTodo = createAction('[Todos] Insert', props<{todo: Todo}>());
export const removeTodo = createAction('[Todos] Remove', props<{id: number}>());
export const editTodo = createAction('[Todos] Edit', props<{todo: Todo}>());