import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitRoutingModule } from './recruit-routing.module';
import { HrcenterComponent } from './hrcenter/hrcenter.component';

@NgModule({
  imports: [
    CommonModule,
    RecruitRoutingModule
  ],
  declarations: [HrcenterComponent]
})
export class RecruitModule { }
