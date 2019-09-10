import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { query, trigger, transition, style, stagger, animate } from '@angular/animations';
import { consults } from '../models/consults';

@Component({
  selector: 'app-concern',
  templateUrl: './concern.page.html',
  styleUrls: ['./concern.page.scss'],
  animations: [
    trigger('anime', [
      transition(':enter', [
        // query('.card, img, p', [style({ transform: 'translateY(10%)', opacity: 0 })]),
        query('.card, img, p', [
          style({ transform: 'translateY(10%)', opacity: 0 }),
          stagger('.2s', [
            animate('.8s ease-out', style({ transform: 'translateY(0%)', opacity: 1 }))
          ])
        ], { optional: true }),
      ]),
      // transition('true => false', [
      //   query('.category', stagger('-150ms', [
      //     style({ height: '*' }),
      //     animate(
      //         '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
      //         style({ height: 0 })
      //     )
      //   ]), { optional: true })
      // ])
    ]),
   
  ]
})
export class ConcernPage implements OnInit {
  list = consults;
  constructor(private router: Router) { }

  ngOnInit() {
    // this.anime = true;
  }

  exit() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  goto(o) {
    console.log(o);
  }

}
