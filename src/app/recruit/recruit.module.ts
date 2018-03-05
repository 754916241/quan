import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitRoutingModule } from './recruit-routing.module';
import { HrcenterComponent } from './hrcenter/hrcenter.component';
import { RecruitComponent } from './recruit.component';
import {JobMngComponent} from './job-mng/job-mng.component';
import {JobPublishComponent} from './job-publish/job-publish.component';
import {UserMngComponent} from './user-mng/user-mng.component';
import {CvMngComponent} from './cv-mng/cv-mng.component';
import {CvMngService} from './cv-mng/service/cv-mng.service';
import {PaginatorModule} from 'primeng/primeng';
import {JobMngService} from './job-mng/service/job-mng.service';
import { CompanyInfoComponent } from './user-mng/company-info/company-info.component';
import { ChangePasswordComponent } from './user-mng/change-password/change-password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JobPublishService} from './job-publish/service/job-publish.service';

@NgModule({
  imports: [
    CommonModule,
    RecruitRoutingModule,
    PaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RecruitComponent,
    HrcenterComponent,
    CvMngComponent,
    JobMngComponent,
    JobPublishComponent
  ],
  providers: [
    CvMngService,
    JobMngService,
    JobPublishService
  ]
})
export class RecruitModule { }
