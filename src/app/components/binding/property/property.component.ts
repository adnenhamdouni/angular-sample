import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  //templateUrl: './property.component.html',
  template: `
  <H1>One way binding data from component class to the view!</H1>

  <H3>Show image with binding url</H3>
  <img src="{{ angularLogo }}">
  <img [src]="angularLogo">
  <img bind-src="angularLogo">


  <H3>enable and disable button</H3>
  <button [disabled]="buttonStatus1">My button 1</button>
  <button [disabled]="buttonStatus2">My button 2</button>
  <button [disabled]="buttonStatus3 == 'enabled'">My button 3</button>
  <button [disabled]="buttonStatus3 != 'enabled'">My button 4</button>

  `
  ,
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  angularLogo = 'https://cdn-images-1.medium.com/max/1600/1*aLM-o3tm0eUugV9QR3qI7g.png'

  buttonStatus1 = true;
  buttonStatus2 = false;
  buttonStatus3 = 'enabled';

  constructor() { }

  ngOnInit() {
  }

}
