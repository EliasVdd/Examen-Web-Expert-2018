import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {Customer} from '../models/customer.model';

@Injectable()
export class ShoppingcartService {
  cart: Product[] = [];
  totalPrice: number = 0;
  customer: Customer;

  getCart(): Product[] {
    return this.cart;
  }

  setCustomer(customer: Customer) {
    this.customer = customer;
  }

  getCustomer(): Customer {
    return this.customer
  }

  addProductToCart(product: Product): void {
    this.cart.push(product);
    this.totalPrice += product.price;
  }

  removeProductFromCart(product: Product): void {
    this.cart = this.cart.slice(this.cart.indexOf(product));
    this.totalPrice -= product.price;

    if (this.totalPrice < 0) {
      this.totalPrice = 0;
    }
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  reset(): void {
    this.cart = [];
    this.totalPrice = 0;
    this.customer = undefined;
  }
}
