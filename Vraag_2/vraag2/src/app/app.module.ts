import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductlistComponent} from './productlist/productlist.component';
import {ProfileComponent} from './profile/profile.component';
import {CartComponent} from './cart/cart.component';

import {ShoppingcartService} from './services/shoppingcart.service';
import {appRoutes} from "./app.routes";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CartGuard} from "./resolvers/cart.guard";
import {ProfileGuard} from "./resolvers/profile.guard";


@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProfileComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ShoppingcartService,
    CartGuard,
    ProfileGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
