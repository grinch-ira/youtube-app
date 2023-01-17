import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})

export class RegistrationComponent {
  constructor(private loginService: LoginService) {}

  public handleRegister(...elements: HTMLInputElement[]): void {
    let name: string;
    let email: string;
    let psw: string;

    [name, email, psw] = elements.map((input) => input.value);

    this.loginService.register(name, email, psw);
  }
}
