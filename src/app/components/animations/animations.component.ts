import { Component, OnInit } from '@angular/core';

import { trigger,state,style,transition,animate,keyframes } from '@angular/animations'

@Component({
  selector: 'app-animations',
  //templateUrl: './animations.component.html',
  template: `
    <p [@myAwesomeAnimation]='state' (click)="animateMe()"> I will animate</p>
  `
  ,
  //styleUrls: ['./animations.component.css']
  styles: [`
    p {
      width:200px;
      background:lightgray;
      margin: 100px auto;
      text-align: center;
      padding: 20px;
      font-size:1.5em;
    }
  `],
  animations: [
      trigger('myAwesomeAnimation', [

        state('small', style({
          transform: 'scale(1)',
        })),

        state('large', style({
          transform: 'scale(1.2)',
        })),

        transition('small <=> large', animate('300ms ease-in', 
          /*style({
            transform: 'translateY(40px)'
          })*/
          keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: 1, transform: 'translateY(35px)', offset: 0.5}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ])
        )),
      ]),
  ]
})
export class AnimationsComponent implements OnInit {

  state: string = 'small';

  constructor() { }

  ngOnInit() {
  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
