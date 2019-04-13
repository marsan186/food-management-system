import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { P404Component } from './error/404.component';
import { P500Component } from './error/500.component';
import { UserAdminRoutingModule } from './userAdmin-routing.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent, P404Component, P500Component, SidebarComponent, HeaderComponent, MainLayoutComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserAdminModule { }
