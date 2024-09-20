import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { LayoutUserComponent } from './layouts/layout-user/layout-user.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListUserComponent,
    AddUserComponent,
    LayoutUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
