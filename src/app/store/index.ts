import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import * as fromGuestReducer from '../store/reducers/guests.reducer';

export interface State {
  [fromGuestReducer.guestsFeatureKey]: fromGuestReducer.GuestState;
}

export const reducers: ActionReducerMap<State> = {
  [fromGuestReducer.guestsFeatureKey]: fromGuestReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [debug] : [];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
