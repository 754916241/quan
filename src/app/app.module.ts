import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserModule} from "./user/user.module";
import { ManagerComponent } from './manager/manager.component';
import { ManageJobComponent } from './manager/manage-job/manage-job.component';
import {UserService} from './user/service/UserService';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CvStatusPipe } from './pipe/cv-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
   // CvStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
