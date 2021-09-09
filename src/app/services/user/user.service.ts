import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class UserService {

  isLogged = false;

  constructor(private storage: StorageService) { }

  login() {
    this.isLogged = true;
    this.storage.setItem();
  }

  logout() {
    this.isLogged = false;
  }
}
