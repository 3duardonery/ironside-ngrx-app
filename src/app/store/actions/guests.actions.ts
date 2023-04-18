import { createAction, props } from '@ngrx/store';

export const addGuest = createAction(
  '[GUEST] Add Guest',
  props<{ name: string }>()
);

export const addGuestSuccess = createAction(
  '[GUEST] Add Guest Success',
  props<{ name: string }>()
);

export const addGuestFailure = createAction(
  '[GUEST] Add Guest Failure',
  props<{ error: string }>()
);
