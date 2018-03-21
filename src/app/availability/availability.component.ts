import { Component, OnInit } from '@angular/core';
import { CssUtilService } from '../util/css-util.service';
import { Elements } from '../util/elements.enum';
import { MdlChipComponent} from '@angular-mdl/core';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {

  public chartType: String;
  constructor( private cssUtilService: CssUtilService ) { }

  ngOnInit() {
    this.chartType = 'PieChart';
    this.cssUtilService.makeTabActive(Elements.battingData);
  }

}
