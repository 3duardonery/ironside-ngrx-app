import { createReducer, on } from '@ngrx/store';
// import * as GuestsActions from '../actions/guests.actions';

export const guestsFeatureKey = 'guests';

export interface GuestState {
  list: string[];
}

export const initialState: GuestState = {
  list: [],
};

export const reducer = createReducer(initialState);
