import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManagerComponent} from './manager/manager.component';
import {ErrorPageComponent} from './error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'recruit',
    loadChildren: './recruit/recruit.module#RecruitModule'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'manager',
    loadChildren: './manager/manager.module#ManagerModule'
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
