import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

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

  onLogoutClick() {
    this.userService.logout();
  }
}