import { SuperRepository } from './super.repository';
import { User } from '../models/user';
import { IUserRepository } from './iuser.repository';

export class UserRepository extends SuperRepository<User> implements IUserRepository {

  constructor(model) {
    super(model);
  }

  
  // post3(model: User) {
  //   return this.context.query(`insert into user values(${model.id},'${model.name}','${model.date}')`);
  // }
}
