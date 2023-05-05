import { createAction, props } from '@ngrx/store';

// Evento disparado pelo componente
export const addGuest = createAction(
  '[GUEST] Add Guest',
  props<{ name: string }>()
);

// Eventos disparados pelo Effect ao receber a resposta da api
export const addGuestSuccess = createAction(
  '[GUEST] Add Guest Success',
  props<{ name: string }>()
);

export const addGuestFailure = createAction(
  '[GUEST] Add Guest Failure',
  props<{ error: string }>()
);
