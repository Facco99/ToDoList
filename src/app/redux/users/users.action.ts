import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/model/user';

export const saveCurrentUser = createAction('[Users] Save', props<{user: User}>());