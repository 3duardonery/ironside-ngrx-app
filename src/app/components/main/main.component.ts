import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import * as fromGuestActions from '../../store/actions/guests.actions';
import * as fromGuestReducer from '../../store/reducers/guests.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class MainComponent implements OnInit {
  listForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  names: string[] = [];

  constructor(private guestStore: Store<fromGuestReducer.GuestState>) {}

  ngOnInit(): void {}

  submit(): void {
    const guestName = this.listForm.value.name;
    this.guestStore.dispatch(fromGuestActions.addGuest({ name: guestName }));
  }
}
