import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../models/user';

const USER = 'USER';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public user = new User();
  public notif: EventEmitter<{ is: boolean, user: User }> = new EventEmitter();

  constructor() {
    this.getSession();
  }
  // se connecter
  public doSignIn(o: User) {
    this.user = o;
    localStorage.setItem(USER, JSON.stringify(this.user));
    this.notif.next({ is: true, user: this.user });
  }

  // se deconnecter
  public doSignOut(): void {
    this.user = new User();
    localStorage.removeItem(USER);
    this.notif.next({ is: false, user: this.user });
  }

  // this methode is for our auth guard
  get isSignedIn(): boolean {return !!localStorage.getItem(USER);}

  //
  public getSession(): void {
      try {
        this.user = JSON.parse(localStorage.getItem(USER));
      } catch (error) {
        this.user = new User();
      }
  }
}

