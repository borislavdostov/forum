import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLogged() {
    return this.userService.isLogged;
  }

  constructor(public userService: UserService) { }

  onLoginClick() {
    this.userService.login();
  }

  onLogoutClick() {
    this.userService.logout();
  }
}