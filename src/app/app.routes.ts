import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamDataComponent } from './team-data/team-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { AddDataComponent } from './add-data/add-data.component';
import { AvailabilityComponent } from './availability/availability.component';


export const router: Routes = [
    // {
    //     path: '',
    //     component: AppComponent
    // },
    {
        path: '',
        redirectTo: 'displayAll',
        pathMatch: 'full'
    },
    {
        path: 'displayAll',
        component: TeamDataComponent
    },
    {
        path: 'addData',
        component: AddDataComponent
    },
    {
        path: 'availability',
        component: AvailabilityComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
