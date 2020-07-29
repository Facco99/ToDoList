import { TodoState, todosReducer } from './todos/todos.reducers';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { usersReducer, UserState } from './users/users.reducers';

export interface AppState {
    todoState: TodoState;
    usersState: UserState;
    router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> = {
    todoState: todosReducer,
    usersState: usersReducer,
    router: routerReducer
};