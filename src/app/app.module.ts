import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';

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
    RecentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    CssUtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
