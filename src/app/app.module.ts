import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CvMngComponent } from './recruit/cv-mng/cv-mng.component';
import { JobMngComponent } from './recruit/job-mng/job-mng.component';
import { JobPublishComponent } from './recruit/job-publish/job-publish.component';
import { UserMngComponent } from './recruit/user-mng/user-mng.component';


@NgModule({
  declarations: [
    AppComponent,
    CvMngComponent,
    JobMngComponent,
    JobPublishComponent,
    UserMngComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
