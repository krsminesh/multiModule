import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalComponent } from './approval/approval.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { RouterModule } from '@angular/router';
import { MemberModule } from '../member/member.module';



@NgModule({
  declarations: [
    ApprovalComponent,
    AdminLandingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MemberModule
  ]
})
export class AdminModule { }
