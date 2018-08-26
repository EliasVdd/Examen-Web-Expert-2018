import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ShoppingcartService} from "../services/shoppingcart.service";

@Injectable()
export class CartGuard implements CanActivate {

  constructor(private shoppingCartService: ShoppingcartService,
              private router: Router) {
  }

  canActivate(): boolean {
    if (!this.shoppingCartService.getCustomer()) {
      this.router.navigate(['/profile']);
      return false;
    }

    return true;
  }
}
