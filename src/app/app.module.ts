import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { CartComponent } from './cart/cart.component';
import { RequestMethodsRepositoryService } from './common/request-methods.repository.service';
import { UrlConstantService } from './common/url.constant.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlackonhoverDirective } from './directives/blackonhover.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CustomerComponent,
    CartComponent,
    BlackonhoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RequestMethodsRepositoryService,HttpClient,UrlConstantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
