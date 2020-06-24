import { TodoState } from './todos/todos.reducers';
import { createSelector } from '@ngrx/store';

export interface AppState {
    todoState: TodoState;
}

export const selectTodosState = (state: AppState) => state.todoState;

export const selectTodos = createSelector(
    selectTodosState,
    (state: TodoState) => state.todos
);

export const getTodoById = createSelector(
    selectTodosState,
    (state: TodoState, props: { id: number }) => state.todos.find(item => item.id === props.id)
);

export const getFirstTodo = createSelector(
    selectTodosState,
    (state: TodoState) => state.todos.length > 0 ? state.todos[0] : null
);