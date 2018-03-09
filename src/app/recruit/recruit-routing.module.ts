import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HrcenterComponent} from './hrcenter/hrcenter.component';
import {CvMngComponent} from './cv-mng/cv-mng.component';
import {JobMngComponent} from './job-mng/job-mng.component';
import {JobPublishComponent} from './job-publish/job-publish.component';
import {RecruitComponent} from './recruit.component';
import {LoginGuard} from '../guard/auth-guard';


const routes: Routes = [
  {
    path: '',
    component: RecruitComponent,
    children: [
      {
        path: '',
        redirectTo: 'hrCenter',
        pathMatch: 'full'
      },
      {
      path: 'hrCenter',
      component: HrcenterComponent
      },
      {
        path: 'cvMng/:page',
        component: CvMngComponent
      },
      {
        path: 'jobMng/:page',
        component: JobMngComponent
      },
      {
        path: 'jobPublish',
        component: JobPublishComponent
      },
      {
        path: 'userMng',
        loadChildren: './user-mng/user-mng.module#UserMngModule'
      }
    ],
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitRoutingModule { }
