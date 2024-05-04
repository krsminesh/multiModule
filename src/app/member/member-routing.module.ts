import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { MemberLandingPageComponent } from './member-landing-page/member-landing-page.component';



const routes: Routes = [

  {path:'member', component:MemberLandingPageComponent ,children:[
    {path:'applyleave',component:ApplyLeaveComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
