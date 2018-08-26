import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product.model";
import {ShoppingcartService} from "../services/shoppingcart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Product[];
  total: number = 0;
  targetAddress: string;

  constructor(private shoppingcartService: ShoppingcartService,
              private router: Router) { }

  ngOnInit() {
    this.refreshCart();
    this.targetAddress = this.shoppingcartService.getCustomer().address;
  }

  private refreshCart(): void {
    this.cart = this.shoppingcartService.getCart();
    this.total = this.shoppingcartService.getTotalPrice();
  }

  removeFromCart(product: Product) {
    this.shoppingcartService.removeProductFromCart(product);
    this.refreshCart();
  }

  checkout() {
    window.alert('Thanks for your order.')
    this.shoppingcartService.reset();
    this.router.navigate(['/']);
  }
}
