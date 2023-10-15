import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
//import { UsersModule } from './shared/modules/users/users.module';
//import { ProductsModule } from './shared/modules/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //UsersModule,
    //ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log(`App Module is Downlodedd...!!`)
  }
 }
