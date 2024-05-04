import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { MemberLandingPageComponent } from './member-landing-page/member-landing-page.component';
import { CheckLeaveBalanceComponent } from './check-leave-balance/check-leave-balance.component';



const routes: Routes = [

  {path:'member', component:MemberLandingPageComponent ,children:[
    {path:'applyleave',component:ApplyLeaveComponent, children:[
        {path:'leavebalance', component:CheckLeaveBalanceComponent}
      ]}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
