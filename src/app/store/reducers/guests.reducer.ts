import { createReducer, on } from '@ngrx/store';
import * as fromGuestActions from '../actions/guests.actions';

export const guestsFeatureKey = 'guests';

export interface GuestState {
  list: string[];
}

export const initialState: GuestState = {
  list: [],
};

export const reducer = createReducer(
  initialState,
  on(fromGuestActions.addGuestSuccess, (state, action) => {
    return {
      list: [...state.list, action.name],
    };
  })
);
