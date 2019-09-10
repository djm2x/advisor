import { Injectable, EventEmitter } from '@angular/core';
import { Platform } from '@ionic/angular';
import { createConnection, ConnectionOptions, getConnection, Connection } from 'typeorm';
import { User, Question } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  witchPlateform = new EventEmitter(true);
  constructor(private platform: Platform) { }

  async ready() {
    try {
      await getConnection();
    } catch (ex) {
      await this.createConnection();
    }
  }

  public createConnection(): Promise<Connection> {
    let dbOptions: ConnectionOptions;

    if (this.platform.is('cordova')) {

      dbOptions = {
        type: 'cordova',
        database: '__vcitemobile',
        location: 'default'
      };
      this.witchPlateform.next('cordova');
    } else {
      console.log('sqlje else')
      dbOptions = {
        type: 'sqljs',
        location: 'browser',
        autoSave: true
      };
      this.witchPlateform.next('sql.js');
    }

    // additional options
    Object.assign(dbOptions, {
      logging: [
        'error',
        // 'query',
        // 'schema'
      ],
      synchronize: true,
      entities: [
        User,
        Question,
      ]
    });

    return createConnection(dbOptions);
  }
}
