import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../../core/model/todo';
import { saveCurrentUser } from './users.action';
import { User } from 'src/app/core/model/user';

export interface UserState {
    currentUser: User;
}

export const initialState: UserState = {
    currentUser: null
};

const usersReducerFun = createReducer(
    initialState,
    on(saveCurrentUser, (state, { user }) => ({ ...state, currentUser: user })),
);

export function usersReducer(state: UserState | undefined, action: Action) {
    return usersReducerFun(state, action);
}