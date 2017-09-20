import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Player } from '../team-data/player';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { PagedData } from '../util/paged-data';
import { OnChanges, SimpleChanges, Input } from '@angular/core';
import { PerMatchPlayerStat } from './per-match-player-stat';
import { NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';

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

    this.perMatchPlayerStat = new PerMatchPlayerStat();
    const baseEndpoint = environment.serverUrl;
    const nameEndpoint = '/api/players';
    const projection = 'getPlayerNames';
    const page = 0;
    document.getElementById('availability').classList.remove('is-active');
    document.getElementById('displayData').classList.remove('is-active');
    document.getElementById('addData').className += ' is-active';
    this.http.get(baseEndpoint + nameEndpoint).subscribe(response => {
      this.page = JSON.parse(JSON.stringify(response.json()['page']));
      console.log('Aaya');
      console.log(this.page.totalElements);
      this.playerNames = new Array(this.page.totalElements.valueOf());
      const that = this;
      that.getData(baseEndpoint + nameEndpoint, projection, this.page.totalElements)
        .subscribe(response2 => {
          that.playerNames = JSON.parse(JSON.stringify(response2.json()['_embedded']['players']));
          that.elementsRecieved = Number(JSON.stringify(response2.json()['page']['size']));
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

  public updateData(form: NgForm) {
    console.log(JSON.stringify(this.perMatchPlayerStat));
    const baseEndpoint = environment.serverUrl + '/addPlayerData';
    this.http.post(baseEndpoint, this.perMatchPlayerStat)
      .subscribe(response => {
        form.reset();
      }, error => {
        this.handleErrorObservable(error);
      });
  }
}

export class PlayerName {
  playerName: String;
  id: Number;
}
