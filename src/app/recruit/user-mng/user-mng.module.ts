import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {UserMngComponent} from './user-mng.component';
import {CompanyInfoComponent} from './company-info/company-info.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import { CompanyValidateComponent } from './company-validate/company-validate.component';
import { CompanyService} from './service/company.service';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    UserMngComponent,
    CompanyInfoComponent,
    ChangePasswordComponent,
    CompanyValidateComponent
  ],
  providers: [
    CompanyService
  ]
})
export class UserMngModule { }
