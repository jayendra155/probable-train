import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { PlayerStats } from './player-stats';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { NameFilterPipe } from './name-filter.pipe';

@Component({
  selector: 'app-team-data',
  templateUrl: './team-data.component.html',
  styleUrls: ['./team-data.component.css']
  // pipes: [NameFilterPipe]
})
export class TeamDataComponent implements OnInit {

  playersStats: PlayerStats[];
  private responseData: string;
  private elementsRecieved: Number;
  constructor(private http: Http) {

  }

  ngOnInit() {
    this.playersStats = new Array();
    this.http.get('http://localhost:8080/api/players?page=0&size=30')
      .subscribe(response => {
        console.log('Status : ' + response.statusText);
        this.playersStats = JSON.parse(JSON.stringify(response.json()['_embedded']['players']));
        this.elementsRecieved = Number(JSON.stringify(response.json()['page']['totalElements']));
      });
    document.getElementById('addData').classList.remove('is-active');
    document.getElementById('availability').classList.remove('is-active');
    document.getElementById('displayData').className += ' is-active';
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
