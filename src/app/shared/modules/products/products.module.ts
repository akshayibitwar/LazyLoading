import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { LaptopsComponent } from './product-dashboard/laptops/laptops.component';
import { PhonesComponent } from './product-dashboard/phones/phones.component';
import { TabsComponent } from './product-dashboard/tabs/tabs.component';

const routes : Routes = [
  {
    path : '',
    component : ProductDashboardComponent,
    children : [
      {path : '', component :  LaptopsComponent, pathMatch : 'full' },
      {path : 'laptops', component :  LaptopsComponent,  },
      {path : 'phones', component :  PhonesComponent,  },
      {path : 'tabs', component :  TabsComponent,  }

    ]
    
  }
]

@NgModule({
  declarations: [
    ProductDashboardComponent,
    LaptopsComponent,
    PhonesComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule {
  constructor(){
    console.log(`Products Module is Downlodedd...!!`)
  }
 }
