import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {ProfileComponent} from "../profile/profile.component";
import {ShoppingcartService} from "../services/shoppingcart.service";

@Injectable()
export class ProfileGuard implements CanDeactivate<ProfileComponent> {

  constructor(private shoppingCartService: ShoppingcartService) {
  }

  canDeactivate(component: ProfileComponent): boolean {
    if (!this.shoppingCartService.getCustomer()) {
      window.alert('Fill in the form and press submit.');
      return false;
    }

    return true;
  }

}
