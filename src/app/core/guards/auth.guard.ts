import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(
    private userService: UserService,
    private router: Router) { }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isLoggedFromData = childRoute.data.isLogged;
    if (typeof isLoggedFromData === 'boolean' && isLoggedFromData == this.userService.isLogged) {
      return true;
    }
    this.router.navigateByUrl(this.router.url);
    return false
  }

}
