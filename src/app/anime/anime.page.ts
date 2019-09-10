import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.page.html',
  styleUrls: ['./anime.page.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true }),
        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ]),

    // trigger('explainerAnim', [
    //   transition('* => *', [
    //     query('.col', style({ opacity: 0, transform: 'translateX(-40px)' })),
    //     query('.col', stagger('500ms', [
    //       animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
    //     ])),
    //     query('.col', [
    //       animate(1000, style('*'))
    //     ])
    //   ])
    // ])
  ]
})
export class AnimePage implements OnInit {
  items = [];
  constructor() {
    this.items = ['Hey this is an item', 'Here is another one', 'This is awesome'];
  }

  ngOnInit() {
  }

  pushItem() {
    this.items.push('Oh yeah that is awesome');
  }
  removeItem() {
    this.items.pop();
  }

}
