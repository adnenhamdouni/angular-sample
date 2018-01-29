import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templating',
  //templateUrl: './templating.component.html',
  template: `
  <H1>Hey guys!</H1>
  <p> How are you soing?</p>

  <H3> interpolate object</H3>
  <p> myObject location : {{ myObject.location }} </p>

  <H3>Interpolate list using ngFor</H3>
  <ul>
    <li *ngFor= "let arr of myArr">
      {{arr}}
    </li>
  </ul>

  <H3>Interpolate condition using ngIf</H3>
  <ul>
    <li *ngIf= "myArr">Yeah, I exist.</li>
    <li *ngIf= "!myArr">Oups, I not exist.</li>
    <li *ngIf= "myString == 'Something'">Good, something here.</li>
    <li *ngIf= "myNewString != 'Something'">Good, nothing here.</li>
  </ul>


  <H3>Interpolate condition using ngIf and else</H3>
  <ul>
    <li *ngIf= "myBoolean; else otherTmpl">Yeah, I exist.</li>
   
  </ul>

  <ng-template #otherTmpl>No, I do.</ng-template>

  <H3>Interpolate with Template using condition ngIf, then and else</H3>
  <div *ngIf= "myBoolean; then tmpl1 else tmpl2"></div>

  <ng-template #tmpl1>myBoolean is true.</ng-template>
  <ng-template #tmpl2>myBoolean is false.</ng-template>
  `,
  styleUrls: ['./templating.component.css']
})
export class TemplatingComponent implements OnInit {

  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };

  myArr = ['him', 'hers', 'yours'];

  myString = 'Something';
  myNewString = 'nothing';

  myBoolean = false;


  constructor() { }

  ngOnInit() {
  }

}
