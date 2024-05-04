import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { MemberLandingPageComponent } from './member-landing-page/member-landing-page.component';
import { RouterModule } from '@angular/router';
import { CheckLeaveBalanceComponent } from './check-leave-balance/check-leave-balance.component'



@NgModule({
  declarations: [
    ApplyLeaveComponent,
    MemberLandingPageComponent,
    CheckLeaveBalanceComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class MemberModule { }
