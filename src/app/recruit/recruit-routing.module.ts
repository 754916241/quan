import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HrcenterComponent} from './hrcenter/hrcenter.component';
import {CvMngComponent} from './cv-mng/cv-mng.component';
import {JobMngComponent} from './job-mng/job-mng.component';
import {JobPublishComponent} from './job-publish/job-publish.component';
import {UserMngComponent} from './user-mng/user-mng.component';
import {RecruitComponent} from './recruit.component';

const routes: Routes = [
  {
    path: '',
    component: RecruitComponent,
    children: [
      {
      path: 'hrCenter',
      component: HrcenterComponent
      },
      {
        path: 'cvMng',
        component: CvMngComponent
      },
      {
        path: 'jobMng',
        component: JobMngComponent
      },
      {
        path: 'jobPublish',
        component: JobPublishComponent
      },
      {
        path: 'userMng',
        component: UserMngComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitRoutingModule { }
