import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recruit',
    pathMatch: 'full'
  },
  {
    path: 'recruit',
    loadChildren: './recruit/recruit.module#RecruitModule'
  },
  {
    path: 'user',
    loadChildren: './recruit/user.module#UserModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
