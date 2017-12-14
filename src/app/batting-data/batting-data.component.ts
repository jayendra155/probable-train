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

@Component({
  selector: 'app-batting-data',
  templateUrl: './batting-data.component.html',
  styleUrls: ['./batting-data.component.css']
})
export class BattingDataComponent implements OnInit {

  constructor(private http: Http, private cssUtilService: CssUtilService) {
  }

  ngOnInit() {
    this.cssUtilService.makeTabActive(Elements.battingData);
  }

}
