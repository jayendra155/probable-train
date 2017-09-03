import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("availability").classList.remove("is-active");
    document.getElementById("displayData").classList.remove("is-active");
    document.getElementById("addData").className += " is-active";
  }

}
