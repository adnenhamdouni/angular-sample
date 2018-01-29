import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  myDataString: string = '';

  constructor(private myDataService: DataService) { }

  ngOnInit() {
    console.log(
      this.myDataService.cars);

      this.myDataString = this.myDataService.myData();
  }

  myDataCars = this.myDataService.cars;

  


}
