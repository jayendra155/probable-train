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
import { Elements } from '../util/elements.enum';
import { CssUtilService } from '../util/css-util.service';
import { MatchType } from "./MatchType.enum";
import { MdlSnackbarService } from '@angular-mdl/core';

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
  matchTypeKeys = Object.keys(MatchType).filter(key => !isNaN(Number(key))).map(key => ({value: MatchType[key], title: key}));

  constructor(private http: Http, private cssUtilService: CssUtilService,
              private mdlSnackbarService: MdlSnackbarService) {
    this.page = new PagedData();
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }

  ngOnInit() {
    console.log(JSON.stringify(this.matchTypeKeys));
    this.perMatchPlayerStat = new PerMatchPlayerStat();
    const baseEndpoint = environment.serverUrl;
    const nameEndpoint = '/api/players';
    const projection = 'getPlayerNames';
    const page = 0;
    this.cssUtilService.makeTabActive(Elements.addData);
    this.http.get(baseEndpoint + nameEndpoint).subscribe(response => {
      this.page = JSON.parse(JSON.stringify(response.json()['page']));
      // console.log(this.page.totalElements);
      this.playerNames = new Array(this.page.totalElements.valueOf());
      const that = this;
      that.getData(baseEndpoint + nameEndpoint, projection, this.page.totalElements)
        .subscribe(response2 => {
          that.playerNames = JSON.parse(JSON.stringify(response2.json()['_embedded']['players']));
          that.elementsRecieved = Number(JSON.stringify(response2.json()['page']['size']));
          // console.log('Names : ' + JSON.stringify(that.playerNames));
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
    window.alert('false behaviour');
    this.http.post(baseEndpoint, this.perMatchPlayerStat)
      .subscribe(response => {
        this.mdlSnackbarService.showToast('Data submitted successfully', 2000);
        form.reset();
        this.perMatchPlayerStat = new PerMatchPlayerStat();
      }, error => {
        this.handleErrorObservable(error);
      });
  }
}

export class PlayerName {
  playerName: String;
  id: Number;
}
