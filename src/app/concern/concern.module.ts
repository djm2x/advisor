import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConcernPage } from './concern.page';
import { MatIconModule, MatButtonModule, MatRippleModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: ConcernPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConcernPage]
})
export class ConcernPageModule {}
