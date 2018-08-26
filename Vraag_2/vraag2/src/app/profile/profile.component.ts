import {Component, OnInit} from '@angular/core';
import {Customer} from '../models/customer.model';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShoppingcartService} from "../services/shoppingcart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profileForm: FormGroup;

  constructor(private shoppingCartService: ShoppingcartService,
              private router: Router) {
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  submit(): void {
    const name = this.profileForm.get('name').value;
    const address = this.profileForm.get('address').value;
    const email = this.profileForm.get('email').value;

    const customer = new Customer(name, address, email);

    this.shoppingCartService.setCustomer(customer);
    this.router.navigate(['/products']);
  }

}
