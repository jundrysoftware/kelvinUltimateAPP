
/**
 * Cart Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */


import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  cartProducts: Product[] = [];
  total: number = 0;
  shipping : string = localStorage.getItem('shipping');
  tax : string = localStorage.getItem('tax');

  constructor(public modalController: ModalController,
    public storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.getCartItems();
  }

  // Get Cart Items From Storage
  getCartItems() {
    this.total = 0;
    this.storageService.getObject('my-cart').then((products) => {
      this.cartProducts = products;
      for (var i = 0; i < this.cartProducts.length; i++) {
        this.total += this.cartProducts[i].discountPrice * this.cartProducts[i].quantity;
      }
    });
  }
  // Remove Product From Cart
  async removeProduct(product, index) {
    this.cartProducts.splice(index, 1);
    await this.storageService.removeStorageValue(product.id, 'my-cart');
    await this.getCartItems();
    this.total = this.total - (product.discountPrice * product.quantity);
  }

  // Go to checkout page
  async goToCheckout() {
    var shipping = parseInt(localStorage.getItem('shipping'));
    var tax = parseInt(localStorage.getItem('tax'));
    var result = this.total + shipping + tax;
    var pago = result.toString();
    localStorage.setItem('pagos', pago);
    this.router.navigate(['/checkout']);
  }

  // Back to previous page options
  dismiss() {
    this.router.navigate(['/tabs/tab1']);
  }
}
