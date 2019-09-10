import { Observable, from, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { getRepository, Repository, ObjectType, ObjectLiteral, InsertResult } from 'typeorm';
import { ISuperRepository } from './isuper.repository';

export class SuperRepository<T> implements ISuperRepository<T> {

  readonly context: Repository<ObjectLiteral>;

  constructor(public entity: T) {
    this.context = getRepository(entity as any) as any;
  }

  addList(models: any[]) {
    return from(this.context.createQueryBuilder().insert().values(models).execute());
  }

  add(model: T) {
    return from(this.context.insert(model)).pipe(map((e: InsertResult) => e.identifiers[0]));
  }

  count() {
    return from(this.context.count());
  }

  findAndCount(options) {
    return from(this.context.findAndCount(options));
  }

  findOne(options) {
    return from(this.context.findOne(options));
  }

  query(req) {
    return from(this.context.query(req));
  }

  get(options: any = { order: { id: -1 } }) {
    return from(this.context.find(options));
  }

  findById(id, options?) {
    return from(this.context.findOne(id, options));
  }

  update(id, model) {
    // const old = await this.context.findOneOrFail(id);
    return from(this.context.update(id, model));
  }

  delete(criteria) {
    return from(this.context.delete(criteria));
  }
}
