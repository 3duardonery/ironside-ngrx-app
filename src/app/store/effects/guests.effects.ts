import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs';

import * as fromGuestActions from '../actions/guests.actions';

@Injectable()
export class GuestsEffects {
  addGuest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromGuestActions.addGuest),
      tap((name) => {
        console.log(name);
      })
    )
  );

  constructor(private actions$: Actions) {}
}
