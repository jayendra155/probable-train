import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {

  public chartType: String;
  constructor() { }

  ngOnInit() {
    this.chartType = 'PieChart';
    document.getElementById('addData').classList.remove('is-active');
    document.getElementById('displayData').classList.remove('is-active');
    document.getElementById('availability').className += ' is-active';
  }

}
