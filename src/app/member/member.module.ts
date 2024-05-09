import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberLandingPageComponent } from './member-landing-page/member-landing-page.component';
import { RouterModule } from '@angular/router';
import { CheckLeaveBalanceComponent } from './check-leave-balance/check-leave-balance.component'
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';



@NgModule({
  declarations: [
    MemberLandingPageComponent,
    CheckLeaveBalanceComponent,
    ApplyLeaveComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    ApplyLeaveComponent
  ]
})
export class MemberModule { }
