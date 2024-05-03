import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalComponent } from './approval/approval.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';



@NgModule({
  declarations: [
    ApprovalComponent,
    AdminLandingPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
