import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Player } from '../team-data/player';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { PagedData } from '../util/paged-data';
import { OnChanges, SimpleChanges, Input } from '@angular/core';
import { PlayerName } from '../add-data/add-data.component';
import { NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';
import { Elements } from '../util/elements.enum';
import { CssUtilService } from '../util/css-util.service';
import { Direction } from '../util/direction-enum';
import { ServerStatusService } from '../util/server-status.service';

@Component({
  selector: 'app-batting-data',
  templateUrl: './batting-data.component.html',
  styleUrls: ['./batting-data.component.css']
})
export class BattingDataComponent implements OnInit {

  playersStats: Player[];
  searchText: string;
  private responseData: string;
  elementsRecieved: Number;
  serverStatus: boolean;
  constructor(private http: Http, private cssUtilService: CssUtilService,
              private serverStatusService: ServerStatusService) {
  }

  ngOnInit() {
    this.elementsRecieved = null;
    this.playersStats = new Array();
    this.serverStatus = this.serverStatusService.isServerUp();
    const baseEndpoint = environment.serverUrl + '/api/players';
    this.getData(baseEndpoint, 0, 30, 'battingStats.totalRunsScored', Direction.desc)
      .subscribe(response => {
        console.log('Status : ' + response.statusText);
        this.playersStats = JSON.parse(JSON.stringify(response.json()['_embedded']['players']));
        this.elementsRecieved = Number(JSON.stringify(response.json()['page']['totalElements']));
      });
    this.cssUtilService.makeTabActive(Elements.battingData);
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  private getData(baseEndpoint: String, page: Number, size: Number, sort: String, direction: Direction) {
    const url = baseEndpoint + '?page=' + page + '&size=' + size +
      '&sort=' + sort + ',' + Direction[direction];
    return this.http.get(url);
  }

}
