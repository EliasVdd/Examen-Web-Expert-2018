import {Routes} from '@angular/router';
import {ProductlistComponent} from "./productlist/productlist.component";
import {CartComponent} from "./cart/cart.component";
import {ProfileComponent} from "./profile/profile.component";
import {CartGuard} from "./resolvers/cart.guard";
import {ProfileGuard} from "./resolvers/profile.guard";

export const appRoutes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products', component: ProductlistComponent},
  {path: 'profile', component: ProfileComponent, canDeactivate: [ProfileGuard]},
  {path: 'cart', component: CartComponent, canActivate: [CartGuard]},
];
