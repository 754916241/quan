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
import {MessagerGuard} from '../guard/manager-guard';
import {UserService} from '../user/service/UserService';

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
    CompanyService,
    MessagerGuard,
    UserService
  ]
})
export class ManagerModule { }
