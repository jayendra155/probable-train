import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("addData").classList.remove("is-active");
    document.getElementById("displayData").classList.remove("is-active");
    document.getElementById("availability").className += " is-active";
  }

}
