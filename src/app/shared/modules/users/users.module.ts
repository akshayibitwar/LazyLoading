import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { ActiveUsersComponent } from './users-dashboard/active-users/active-users.component';
import { InactiveUsersComponent } from './users-dashboard/inactive-users/inactive-users.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path : '', component : UsersDashboardComponent,
    children : [
      {path : '',  component : ActiveUsersComponent, pathMatch : 'full'},
      {path : 'active-users', component : ActiveUsersComponent},
      {path : 'inactive-users', component : InactiveUsersComponent}
    ]
  }

];

@NgModule({
  declarations: [
    UsersDashboardComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule {
  constructor(){
    console.log(`User Module is Downlodedd...!!`)
  }
 }
