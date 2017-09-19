import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Player } from '../team-data/player';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { PagedData } from '../util/paged-data';
import { OnChanges, SimpleChanges, Input } from '@angular/core';
import { PerMatchPlayerStat } from './per-match-player-stat';
import { baseUrl } from '../util/util';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit, OnChanges {

  private elementsRecieved: Number;
  private page: PagedData;
  playerNames: PlayerName[];
  public perMatchPlayerStat: PerMatchPlayerStat;

  constructor(private http: Http) {
    this.page = new PagedData();
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }

  ngOnInit() {
    this.playerNames = new Array(11);
    this.perMatchPlayerStat = new PerMatchPlayerStat();
    const baseEndpoint = 'http://localhost:8080'; // 'http://192.168.0.101:8080'
    const nameEndpoint = '/api/players';
    const projection = 'getPlayerNames';
    const page = 0;
    document.getElementById('availability').classList.remove('is-active');
    document.getElementById('displayData').classList.remove('is-active');
    document.getElementById('addData').className += ' is-active';
    this.http.get(baseUrl + nameEndpoint).subscribe(response => {
      this.page = JSON.parse(JSON.stringify(response.json()['page']));
      const that = this;
      that.getData(baseEndpoint + nameEndpoint, projection, this.page.totalElements)
        .subscribe(response2 => {
          that.playerNames = JSON.parse(JSON.stringify(response2.json()['_embedded']['players']));
          that.elementsRecieved = Number(JSON.stringify(response2.json()['page']['size']));
          // this.page = JSON.parse(JSON.stringify(response.json()['page']));
          console.log('Names : ' + JSON.stringify(that.playerNames));
        }, error => {
          that.handleErrorObservable(error);
        });
    });

  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  private getData(baseEndpoint: String, projection: String, numberOfELements: Number) {
    const url = baseEndpoint + '?projection=' + projection + '&sort=playerName' + '&size=' + numberOfELements;
    console.log('URL: ' + url);
    return this.http.get(url);
  }

  public updateData() {
    console.log(JSON.stringify(this.perMatchPlayerStat));
    const baseEndpoint = 'http://localhost:8080/addPlayerData';
    this.http.post(baseEndpoint, this.perMatchPlayerStat)
      .subscribe(response => {
        console.log(response.json());
      }, error => {
        this.handleErrorObservable(error)
      });
  }
}

export class PlayerName {
  playerName: String;
  id: Number;
}
