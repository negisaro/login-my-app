import { NgModule } from '@angular/core';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
],
})
export class DashboardModule { }
