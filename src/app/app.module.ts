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

@NgModule({
  declarations: [
    AppComponent,
    TeamDataComponent,
    PageNotFoundComponent,
    AddDataComponent,
    AvailabilityComponent,
    NameFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
