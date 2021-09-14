import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', "../../form-styles.css"]
})
export class RegisterComponent {

  isLoading = false;

  constructor() { }

  submitFormHandler(formValue: { username: string, email: string, password: string }) {

  }

}
