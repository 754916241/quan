import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './service/UserService';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    LoginComponent,
    RegistComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
