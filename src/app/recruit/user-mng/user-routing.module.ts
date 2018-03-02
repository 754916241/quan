import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserMngComponent} from './user-mng.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {CompanyInfoComponent} from './company-info/company-info.component';


const routes: Routes = [
  {
    path: '',
    component: UserMngComponent,
    children: [
      {
        path: '',
        redirectTo: 'companyInfo',
        pathMatch: 'full'
      },
      {
      path: 'changePassword',
      component: ChangePasswordComponent
      },
      {
        path: 'companyInfo',
        component: CompanyInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
