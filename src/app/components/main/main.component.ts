import { Component, OnInit, inject } from '@angular/core';
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
export class MainComponent {
  listForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  // Angular15: Podemos injetar com a instrução Inject(...)
  guestStore = inject(Store<fromGuestReducer.GuestState>);

  guestNames$: Observable<string[]> = this.guestStore.select(
    fromGuestSelector.guestListSelector
  );

  isWarningActive: boolean = false;

  // Forma antiga de injetar objetos/serviços no componente
  //constructor(private guestStore: Store<fromGuestReducer.GuestState>) {}

  ngOnInit(): void {
    this.guestStore
      .select(fromGuestSelector.isAddGuestError)
      .subscribe((hasError) => (this.isWarningActive = hasError));
  }

  submit(): void {
    const guestName = this.listForm.value.name;
    this.guestStore.dispatch(fromGuestActions.addGuest({ name: guestName }));
  }
}
