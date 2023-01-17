import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { UserService } from 'src/app/core/services/user.service';

@Injectable({
  providedIn: 'root',
})

export class LoginGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  public canActivate(): boolean | UrlTree {
    const isAllowed: boolean = this.userService.isLogin();
    if (isAllowed) {
      return true;
    }

    return this.router.parseUrl('login');
  }
}
