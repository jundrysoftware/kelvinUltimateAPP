import { Component, OnInit, Input } from '@angular/core';
import { ProductCart } from '../../models/productCart.model';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

  @Input() id: number;
  @Input() name: String;
  @Input() description: String;
  @Input() price: number;
  @Input() discountPrice: number;
  @Input() images: Array<String>;
  @Input() size: Array<String>;
  @Input() color: Array<String>;
  @Input() isWishlist: boolean;

  
  

  products: ProductCart;

  // Slider Options
  slideOpts = {
    initialSlide: 0,
    loop: true,
    autoplay: true,
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  };

  constructor(public router: Router,
    private storageService: StorageService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  selsize: string ='';
  selcolor: string ='';
  cant : number = 1;

  SelectSize(size){
    this.selsize=size;
  }

  SelectColor(color){
    this.selcolor=color;
  }
  

  // Add to Cart Function
  addToCart() {
    this.products = {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      discountPrice: this.discountPrice,
      images: this.images,
      size: this.selsize,
      color: this.selcolor,
      quantity: this.cant,
      isWishlist: this.isWishlist
    }
    
    
    // Save cart product in storage
    this.storageService.setObject(this.products, 'my-cart');
    Swal.fire('shopping cart', 'product added to shopping cart', 'success');
  }

  // Minus Product Quantity
  minusQuantity() {
    if (this.cant > 1) {
      this.cant = this.cant - 1;
    }
  }

  // Add More Quantity
  addQuantity() {
    this.cant = this.cant + 1;
  }

  // Go to cart page
  async gotoCartPage() {
    this.dismiss();
    this.router.navigate(['/cart']);
  }

  // Back to previous page function
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }
}
