import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styling',
  //templateUrl: './styling.component.html',
  template: `

    <h1>Styling - Class Binding</h1>
    <h3>Hello!</h3>

    <h1>Class Binding - Dynamically control CSS classes through class binding.</h1>
    <h3 [class]="titleClass">Hello titleClass!</h3>
    <h3 [class.red-title]="titleClass2">Hello titleClass2!</h3>

    <h1>Using ngClass using object titleClasses</h1>
    <h3 [ngClass]="titleClasses">Hello titleClasses!</h3>

  `
  ,
  //styleUrls: ['./styling.component.css']
  styles: [`

    h3 {
      text-decoration:underline;
    }

    .red-title {
      color: red;
    }

    .large-title {
      font-size: 4em;
    }

  `]
})
export class StylingComponent implements OnInit {

  titleClass = 'red-title';
  titleClass2 = false;

  titleClasses= {
    'red-title': true,
    'large-title': true
  }

  constructor() { }

  ngOnInit() {
  }

}
