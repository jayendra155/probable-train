import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { PlayerStats } from '../team-data/player-stats';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { PagedData } from '../util/paged-data';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  // playersStats: PlayerStats[];
  private elementsRecieved: Number;
  private page: PagedData;
  playerNames: PlayerName[];
  numberOfPlayersInMatch: Number;

  constructor(private http: Http) {
    // this.playersStats = new Array();
    this.page = new PagedData();
    
  }

  ngOnInit() {
    this.playerNames = new Array();
    this.numberOfPlayersInMatch = 11;
    const baseEndpoint = 'http://localhost:8080/api/players';
    const projection = 'getPlayerNames';
    document.getElementById('availability').classList.remove('is-active');
    document.getElementById('displayData').classList.remove('is-active');
    document.getElementById('addData').className += ' is-active';

    this.getData(baseEndpoint, projection)
      .subscribe(response => {
        // this.playersStats = JSON.parse(JSON.stringify(response.json()['_embedded']['players']));
        this.playerNames = JSON.parse(JSON.stringify(response.json()['_embedded']['players']));
        this.elementsRecieved = Number(JSON.stringify(response.json()['page']['totalElements']));
        this.page = JSON.parse(JSON.stringify(response.json()['page']));
        console.log("Names : " + JSON.stringify(this.playerNames));
      })
      ;
    // console.log(this.playersStats.length);

  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  private getData(baseEndpoint: String, projection: String) {
    const url = baseEndpoint + '?projection=' + projection;
    console.log('URL: ' + url);
    return this.http.get(url);
  }

}

export class PlayerName {
  playerName: String;
  id: Number;
}
