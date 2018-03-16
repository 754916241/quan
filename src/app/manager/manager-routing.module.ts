import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ManagerComponent} from './manager.component';
import {ManageJobComponent} from './manage-job/manage-job.component';
import {ManageCompanyComponent} from './manage-company/manage-company.component';
import {MessagerGuard} from '../guard/manager-guard';

const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      {
        path: '',
        redirectTo: 'manageJob/1',
        pathMatch: 'full'
      },
      {
        path: 'manageJob/:page',
        component: ManageJobComponent
      },
      {
        path: 'manageCompany/:page',
        component: ManageCompanyComponent
      }
    ],
    canActivate: [MessagerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
