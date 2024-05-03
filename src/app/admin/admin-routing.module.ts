import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalComponent } from './approval/approval.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';


const routes: Routes = [
  {path:'admin',component:AdminLandingPageComponent,children:[
    {path:'approval',component:ApprovalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
