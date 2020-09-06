import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CoreHeaderComponent } from './core-header/core-header.component';
import { CoreSidebarComponent } from './core-sidebar/core-sidebar.component';
import { CoreFooterComponent } from './core-footer/core-footer.component';


@NgModule({
  declarations: [CoreComponent, DashboardComponent, AllUsersComponent, UserProfileComponent, ChangePasswordComponent, CoreHeaderComponent, CoreSidebarComponent, CoreFooterComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
