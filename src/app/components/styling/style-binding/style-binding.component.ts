import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  //templateUrl: './style-binding.component.html',
  //templateUrl: './styling.component.html',
  template: `

    <h1>Styling - Style Binding</h1>
    <h3>Hello!</h3>

    <h1>Style Binding - Dynamically control CSS styles throught style binding.</h1>
    <h3 [style.color]="titleStyle">Hello titleStyle!</h3>
    <h3 [style.color]="titleStyle2 ? 'green' : 'pink'">Hello titleStyle!</h3>
    
    <h1>Using ngStyle using object titleStyles</h1>
    <h3 [ngStyle]="titleStyles">Hello titleStyles!</h3>

  `
  ,
  //styleUrls: ['./style-binding.component.css']
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
export class StyleBindingComponent implements OnInit {

  titleStyle = 'red';
  titleStyle2 = true;

  titleStyles = {
    'color': 'red',
    'font-size': '4em'
  }

  constructor() { }

  ngOnInit() {
  }

}
