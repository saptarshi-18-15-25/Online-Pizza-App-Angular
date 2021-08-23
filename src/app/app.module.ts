import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { OrderComponent } from './components/order/order.component';
import { FiltersComponent } from './components/order/filters/filters.component';
import { CartComponent } from './components/order/cart/cart.component';
import { PizzalistComponent } from './components/order/pizzalist/pizzalist.component';
import { CartitemsComponent } from './components/order/cart/cartitems/cartitems.component';
import { PizzasComponent } from './components/order/pizzalist/pizzas/pizzas.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomepagefiltersComponent } from './components/homepage/homepagefilters/homepagefilters.component';
import { HomepagepizzalistComponent } from './components/homepage/homepagepizzalist/homepagepizzalist.component';
import { HomepagepizzaComponent } from './components/homepage/homepagepizzalist/homepagepizza/homepagepizza.component';
import { PagenotfoundComponent } from './components/shared/pagenotfound/pagenotfound.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerloginComponent } from './components/login/customerlogin/customerlogin.component';
import { AdminloginComponent } from './components/login/adminlogin/adminlogin.component';
import { RegisterComponent } from './components/register/register.component';
import { CustomerregisterComponent } from './components/register/customerregister/customerregister.component';
import { AdminregisterComponent } from './components/register/adminregister/adminregister.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    OrderComponent,
    FiltersComponent,
    CartComponent,
    PizzalistComponent,
    CartitemsComponent,
    PizzasComponent,
    HomepageComponent,
    HomepagefiltersComponent,
    HomepagepizzalistComponent,
    HomepagepizzaComponent,
    PagenotfoundComponent,
    LoginComponent,
    CustomerloginComponent,
    AdminloginComponent,
    RegisterComponent,
    CustomerregisterComponent,
    AdminregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
