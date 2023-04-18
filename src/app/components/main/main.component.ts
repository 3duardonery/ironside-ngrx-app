import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {}

  submit(): void {
    console.log(this.listForm.value);
  }
}
