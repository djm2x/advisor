import { User } from '../models/user';
import { ISuperRepository } from './isuper.repository';

export interface IUserRepository extends ISuperRepository<User> {

}
