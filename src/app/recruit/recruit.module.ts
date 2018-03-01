import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitRoutingModule } from './recruit-routing.module';
import { HrcenterComponent } from './hrcenter/hrcenter.component';
import { RecruitComponent } from './recruit.component';
import {JobMngComponent} from './job-mng/job-mng.component';
import {JobPublishComponent} from './job-publish/job-publish.component';
import {UserMngComponent} from './user-mng/user-mng.component';
import {CvMngComponent} from './cv-mng/cv-mng.component';

@NgModule({
  imports: [
    CommonModule,
    RecruitRoutingModule
  ],
  declarations: [
    RecruitComponent,
    HrcenterComponent,
    CvMngComponent,
    JobMngComponent,
    JobPublishComponent,
    UserMngComponent
  ]
})
export class RecruitModule { }
