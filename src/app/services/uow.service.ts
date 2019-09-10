import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserRepository } from './user.repository';
import { IUserRepository } from './iuser.repository';

@Injectable({
  providedIn: 'root'
})
export class UowService {
  users: IUserRepository;
  constructor() {
    this.users = new UserRepository(User);
  }
}
