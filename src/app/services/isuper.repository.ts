import { Observable } from 'rxjs';
import { Repository, ObjectLiteral, InsertResult, FindManyOptions, FindConditions, ObjectID } from 'typeorm';

export interface ISuperRepository<T> {

  context: Repository<ObjectLiteral>;

  addList(models: any[]): Observable<any>;

  add(model: T): Observable<T | any>;

  count(): Observable<number>;

  findAndCount(options): Observable<T[] | any[]>;

  findOne(options): Observable<T | ObjectLiteral | any>;

  query(req): Observable<T[]>;

  get(options: FindManyOptions<ObjectLiteral>): Observable<T[] | ObjectLiteral[]>;

  findById(id, options?): Observable<T | ObjectLiteral>;

  update(id, model): Observable<T | any>;

  delete(criteria: string | number | FindConditions<ObjectLiteral> | Date | ObjectID | string[] | number[] | Date[] | ObjectID[])
  : Observable<T | any>;
}
