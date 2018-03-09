import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import {ManageJobComponent} from './manage-job/manage-job.component';
import {ManagerComponent} from './manager.component';
import {JobMngService} from '../recruit/job-mng/service/job-mng.service';
import {FormsModule} from '@angular/forms';
import {PaginatorModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    FormsModule,
    PaginatorModule
  ],
  declarations: [
    ManagerComponent,
    ManageJobComponent
  ],
  providers: [
    JobMngService
  ]
})
export class ManagerModule { }
