import { trigger, transition, style, animate, keyframes } from '@angular/animations';
const me = 'ease-in-out';
export const anime = [
    trigger('items', [
        transition(':enter', [
            style({ transform: 'translateX(50%)', opacity: 0 }),  // initial
            animate(`.7s .3s ${me}`, style({ transform: 'translateX(0%)', opacity: 1 }))  // final
        ])
    ]),
    trigger('logo', [
        transition(':enter', [
            style({ transform: 'translateY(50%)', opacity: 0 }),  // initial
            animate(`.7s .3s ${me}`, style({ transform: 'translateY(0%)', opacity: 1 }))  // final
        ])
    ]),
    trigger('input', [
        transition(':enter', [
            style({ transform: 'translateY(100%)', opacity: 0 }),  // initial
            animate(`1s .5s ease-out`,
            keyframes([
                style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
                style({opacity: .5, transform: 'translateY(2%)',  offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
              ])
            )  // final
        ])
    ]),
];
