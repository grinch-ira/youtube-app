import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user!: User | null;

  private userStream: BehaviorSubject<User | null> = new BehaviorSubject(
    this.user,
  );

  constructor() {
    this.tryLoginFromSession();
  }

  public registrUserAndSaveToLocalStorage(
    name: string,
    email: string,
    password: string,
  ): boolean {
    if (!name || !email || !password) {
      return false;
    }
    const user = new User(name, email, password);
    const userArray = this.getUsersFromLosalStorage();

    if (!userArray) {
      window.localStorage.setItem('users', JSON.stringify([user]));
      return true;
    } else {
      if (!!userArray.find((userName) => userName.name === name)) {
        return false;
      }
      userArray.push(user);
      window.localStorage.setItem('users', JSON.stringify(userArray));
      return true;
    }
  }

  private tryLoginFromSession(): boolean {
    if (window.sessionStorage.length) {
      let isLogin: boolean;
      const userSession = window.sessionStorage.getItem('user');
      if (userSession) {
        const user: User = JSON.parse(userSession);
        if (!user.name || !user.password) {
          return false;
        } else {
          isLogin = this.loginUser(user.name, user.password);
          return isLogin;
        }
      }
    }
    return false;
  }

  private getUsersFromLosalStorage(): User[] | null {
    if (!window.localStorage.length) {
      return null;
    }
    const localStorageUsers = window.localStorage.getItem('users');
    if (!localStorageUsers) {
      return null;
    } else {
      return JSON.parse(localStorageUsers);
    }
  }

  private saveSession(user: User): void {
    window.sessionStorage.setItem('user', JSON.stringify(user));
  }

  public loginUser(name: string, password: string): boolean {
    const userArray = this.getUsersFromLosalStorage();
    if (!userArray) {
      return false;
    }
    const currentUser = userArray?.find((userName) => userName.name === name);
    if (!currentUser || currentUser.password !== password) {
      return false;
    }
    this.saveSession(currentUser);
    this.user = currentUser;
    this.userStream.next(currentUser);
    return true;
  }

  public exitUser(): void {
    window.sessionStorage.clear();
    this.userStream.next(null);
    this.user = null;
  }

  public isLogin(): boolean {
    return !!this.user;
  }

  public getUserStream(): Observable<User | null | undefined> {
    return this.userStream;
  }
}
