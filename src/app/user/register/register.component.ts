import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', "../../form-styles.css"]
})
export class RegisterComponent {

  constructor() { }

  submitFormHandler(formValue: { username: string, email: string, password: string }) {

  }

}
