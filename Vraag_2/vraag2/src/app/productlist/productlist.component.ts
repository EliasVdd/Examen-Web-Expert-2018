import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import {ShoppingcartService} from "../services/shoppingcart.service";


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productList: Product[];

  constructor(private shoppingCartService: ShoppingcartService) { }

  ngOnInit() {
    this.productList = [
      new Product(1, 'Pizza Margherita', 6.50),
      new Product(2, 'Pizza Cipolla', 8.5),
      new Product(3, 'Pizza Pepperoni', 8.00),
      new Product(4, 'Pizza Mozzarella', 10.00),
      new Product(5, 'Pizza Proscuitto', 8.00),
      new Product(6, 'Pizza bolognese', 9.00),
      new Product(7, 'Pasta Bolognese', 9.50),
      new Product(8, 'Pasta Chicken', 10.00),
      new Product(9, 'Pasta Scampi', 11.00),
      new Product(10, 'Cola', 2.40),
      new Product(11, 'Fanta', 2.40),
      new Product(12, 'Water (plat)', 2.00),
      new Product(13, 'Water (bruis)', 2.00),
      new Product(14, 'Ice Tea', 2.50)
    ];
  }

  addCart(product: Product) {
    this.shoppingCartService.addProductToCart(product);
  }
}
