import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, of, tap } from 'rxjs';

import * as fromGuestActions from '../actions/guests.actions';

@Injectable()
export class GuestsEffects {
  addGuest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromGuestActions.addGuest),
      mergeMap((action) => {
        return action.name == 'error'
          ? of(
              fromGuestActions.addGuestFailure({
                error: 'Erro ao adicionar o convidado',
              })
            )
          : of(fromGuestActions.addGuestSuccess({ name: action.name }));
      })
    )
  );

  constructor(private actions$: Actions) {}
}
