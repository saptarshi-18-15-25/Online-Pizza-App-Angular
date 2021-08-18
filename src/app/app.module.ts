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
    PizzasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
