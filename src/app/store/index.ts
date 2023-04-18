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

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
