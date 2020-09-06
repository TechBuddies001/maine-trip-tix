import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AllUsersComponent } from "./all-users/all-users.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
          component: DashboardComponent
      },
      {
        path: 'allUsers',
        component: AllUsersComponent
      },
      {
        path: 'userProfile',
        component: UserProfileComponent
      },
      {
        path: 'changePassword',
        component: ChangePasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
