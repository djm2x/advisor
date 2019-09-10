import { Component, OnInit } from '@angular/core';
import { UserRepository } from '../services/user.repository';
import { getManager, getRepository } from 'typeorm';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  list: User[] = [];
  constructor(private service: UserRepository) { }

  async ngOnInit() {
    // const res = await getRepository(User).insert({ id: null, name: 'me', date: '14/02/2019' });
    // const res =
    //   console.log(res);
    // console.log(await getManager().find(User));
    this.getAll();
    // console.log(await this.service.getAll());
  }

  async add() {
    // await this.service.add({ id: null, fistname: 'me'}).toPromise();
    this.getAll();
  }

  getAll() {
    // this.service.getAll().subscribe(r => this.list = r);
  }
}
