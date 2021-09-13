import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  errorMessage = '';

  form: any = {
    email: {
      touched: false,
      value: ''
    },
    password: {
      touched: false,
      value: ''
    }
  }

  get showEmailError() {
    return this.form.email.touched && this.form.email.value.length === 0;
  }

  get showPasswordError() {
    return this.form.password.touched && this.form.password.value.length === 0;
  }

  get hasFormErrors() {
    return this.form.email.value.length === 0 || this.form.password.value.length === 0;
  }

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  updateInputValue(name: 'email' | 'password', value: string) {
    this.form[name].touched = true;
    this.form[name].value = value;
  }

  onLoginClicked(): void {
    this.errorMessage = '';
    this.isLoading = true;
    const { email: { value: email }, password: { value: password } } = this.form;
    this.userService.login({ email, password }).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = 'ERROR!';
        this.isLoading = false;
      }
    });
  }

}
