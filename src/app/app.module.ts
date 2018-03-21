import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { MdlModule } from '@angular-mdl/core'

import { AppComponent } from './app.component';
import { TeamDataComponent } from './team-data/team-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddDataComponent } from './add-data/add-data.component';
import { AvailabilityComponent } from './availability/availability.component';
import { NameFilterPipe } from './team-data/name-filter.pipe';
import { BowlingDataComponent } from './bowling-data/bowling-data.component';
import { BattingDataComponent } from './batting-data/batting-data.component';
import { RecentFormComponent } from './recent-form/recent-form.component';
import { CssUtilService } from './util/css-util.service';
import { NanPipePipe } from './pipes/nan-pipe.pipe';
import { ServerStatusService } from './util/server-status.service';
import { GoogleChartComponent } from './google-chart/google-chart.component'

@NgModule({
  declarations: [
    AppComponent,
    TeamDataComponent,
    PageNotFoundComponent,
    AddDataComponent,
    AvailabilityComponent,
    NameFilterPipe,
    BowlingDataComponent,
    BattingDataComponent,
    RecentFormComponent,
    NanPipePipe,
    GoogleChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    MdlModule
  ],
  providers: [
    CssUtilService,
    ServerStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
