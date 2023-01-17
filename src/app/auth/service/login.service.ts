import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  constructor(private userService: UserService, private router: Router) {}

  public tryLogin(name: string, psw: string): void {
    const isLogin: boolean = this.userService.loginUser(name, psw);
    if (!isLogin) {
      alert('incorrect name or password');
    }
    this.router.navigate(['home']);
  }

  public register(name: string, email: string, psw: string): void {
    const isRegister: boolean =
      this.userService.registrUserAndSaveToLocalStorage(name, email, psw);
    if (!isRegister) {
      alert(`user: ${name} has alredy registered`);
    } else {
      alert(`user ${name} registered`);
      this.userService.loginUser(name, psw);
      this.router.navigate(['home']);
    }
  }
}
