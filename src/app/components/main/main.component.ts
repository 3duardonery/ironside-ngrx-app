import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import * as fromGuestActions from '../../store/actions/guests.actions';
import * as fromGuestReducer from '../../store/reducers/guests.reducer';
import * as fromGuestSelector from '../../store/selectors/guest.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, AsyncPipe, NgIf],
})
export class MainComponent implements OnInit {
  listForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  names: string[] = [];

  guestNames$: Observable<string[]> | undefined;

  isModalActive: boolean = false;

  constructor(private guestStore: Store<fromGuestReducer.GuestState>) {}

  ngOnInit(): void {
    this.guestNames$ = this.guestStore.select(
      fromGuestSelector.guestListSelector
    );

    this.guestStore
      .select(fromGuestSelector.isAddGuestError)
      .subscribe((hasError) => (this.isModalActive = hasError));
  }

  submit(): void {
    const guestName = this.listForm.value.name;
    this.guestStore.dispatch(fromGuestActions.addGuest({ name: guestName }));
  }
}
