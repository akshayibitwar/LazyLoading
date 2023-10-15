import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

const routes: Routes = [
  {path : '',  component : DashboardComponent},
  
  
  {
    path : 'products', 
  loadChildren: () => import('./shared/modules/products/products.module')
  .then((m) => m.ProductsModule),
},
  {
    path : 'users', 
  loadChildren: () => import('./shared/modules/users/users.module')
  .then((m) => m.UsersModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
