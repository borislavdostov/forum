import { Injectable } from '@angular/core';
import { StorageService } from '../core/storage.service';

@Injectable()
export class UserService {

  isLogged = false;

  constructor(private storage: StorageService) {
    this.isLogged = this.storage.getItem('isLogged');
  }

  login() {
    this.isLogged = true;
    this.storage.setItem('isLogged', true);
  }

  logout() {
    this.isLogged = false;
    this.storage.setItem('isLogged', false);
  }
}