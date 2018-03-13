import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import {ManageJobComponent} from './manage-job/manage-job.component';
import {ManagerComponent} from './manager.component';
import {JobMngService} from '../recruit/job-mng/service/job-mng.service';
import {FormsModule} from '@angular/forms';
import {PaginatorModule} from 'primeng/primeng';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import {CompanyService} from '../recruit/user-mng/service/company.service';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    FormsModule,
    PaginatorModule
  ],
  declarations: [
    ManagerComponent,
    ManageJobComponent,
    ManageCompanyComponent
  ],
  providers: [
    JobMngService,
    CompanyService
  ]
})
export class ManagerModule { }
