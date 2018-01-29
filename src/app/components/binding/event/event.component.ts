import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  //templateUrl: './event.component.html',
  template: `
  <H1>Caplture user-initiated events from the view and calling component logic!</H1>

  <H3>Click event</H3>
  <button (click)="myClickEvent($event)">My Click Event Button</button>

  <H3>Mouse enter event</H3>
  <button (mouseenter)="myMouseEnterEvent($event)">My Mouse Enter Event Button</button>

  `
  ,
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myClickEvent(event) {
    console.log(event);
  }

  myMouseEnterEvent(event) {
    console.log(event);
  }

}
