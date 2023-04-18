import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GuestsEffects } from './guests.effects';

describe('GuestsEffects', () => {
  let actions$: Observable<any>;
  let effects: GuestsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GuestsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(GuestsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
