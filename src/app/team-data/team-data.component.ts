import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { PlayerStats } from './player-stats';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-team-data',
  templateUrl: './team-data.component.html',
  styleUrls: ['./team-data.component.css']
})
export class TeamDataComponent implements OnInit {

  results: string[];
  playersStats: PlayerStats[];
  private responseData: string;
  private elementsRecieved: Number;
  constructor(private http: Http) {
    // results = new String[5];
  }

  ngOnInit() {
    this.playersStats = new Array();
    this.http.get('http://localhost:8080/api/players')
      .subscribe(response => {
        console.log('Status : ' + response.statusText);
        this.playersStats = JSON.parse(JSON.stringify(response.json()['_embedded']['players']));
        console.log(this.playersStats[0].playerAttribute);
        this.elementsRecieved = Number(JSON.stringify(response.json()['page']['totalElements']));
        console.log('Data : ' + this.responseData);
        console.log('Elements Recieved : ' + this.elementsRecieved);
        // this.extractData();
      });
    document.getElementById('addData').classList.remove('is-active');
    document.getElementById('availability').classList.remove('is-active');
    document.getElementById('displayData').className += ' is-active';
    // }
  }

  private extractData() {
    for (let i = 0; i < this.elementsRecieved; i++) {
      let stats: PlayerStats = new PlayerStats();
      stats.playerAttribute = this.responseData[0]['playerAttribute'];
      stats.playerName = this.responseData[0]['playerName'];
      this.playersStats.push(stats);
    }
    console.log( JSON.stringify(this.playersStats[0]));
  }
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
