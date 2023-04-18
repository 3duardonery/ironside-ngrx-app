import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGuestReducer from '../reducers/guests.reducer';

export const guests = createFeatureSelector<fromGuestReducer.GuestState>(
  fromGuestReducer.guestsFeatureKey
);

export const guestListSelector = createSelector(
  guests,
  (state: fromGuestReducer.GuestState): string[] => state.list
);

export const isAddGuestError = createSelector(
  guests,
  (state: fromGuestReducer.GuestState): boolean => state.error != undefined
);
