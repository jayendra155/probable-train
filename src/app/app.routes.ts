import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamDataComponent } from './team-data/team-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { AddDataComponent } from './add-data/add-data.component';
import { BowlingDataComponent } from './bowling-data/bowling-data.component';
import { BattingDataComponent } from './batting-data/batting-data.component';
import { RecentFormComponent } from './recent-form/recent-form.component';


export const router: Routes = [
    // {
    //     path: '',
    //     component: AppComponent
    // },
    {
        path: '',
        redirectTo: 'battingData',
        pathMatch: 'full'
    },
    // {
    //     path: 'displayAll',
    //     component: TeamDataComponent
    // },
    {
        path: 'addData',
        component: AddDataComponent
    },
    // {
    //     path: 'availability',
    //     component: AvailabilityComponent
    // },
    {
        path: 'battingData',
        component: BattingDataComponent
    },
    {
        path: 'bowlingData',
        component: BowlingDataComponent
    },
    {
        path: 'recentForm',
        component: RecentFormComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
