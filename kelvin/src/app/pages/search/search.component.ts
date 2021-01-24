import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductsService } from '../../services/products.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Router } from '@angular/router';
import { MethodApiServiceService } from '../../services/method-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  // List of Products
  products: any[]=[];

  // Check is product available or not
  isProductAvailable: boolean = false;

  constructor(public modalController: ModalController,
    private router: Router,
    private _methodsApiRestService: MethodApiServiceService) { }


  ngOnInit() {
    this.getProductList('');
  }

  // Get All Products
  getProductList(name) {
    this.products = [];
    this._methodsApiRestService.GetMethod('getAll_product_controller.php?like='+name)
      .subscribe(
        response => {
          if (typeof response[0] === 'undefined' || response[0] === null) {
            //swal.fire("Ups!", "Usuario no encontrado", "error");
          } else {
            for (let x in response) {
              let datos = {
                id: response[x].id,
                name: response[x].name,
                description: response[x].description,
                price: response[x].price,
                discountPrice: response[x].discount,
                images: response[x].images,
                color: response[x].colors,
                size: response[x].sizes,
                quantity: 1,
                isWishlist: false
              }
              this.products.push(datos);        
            }
          }
        },
        error => {
          if (!error.ok) {
          }
        }
      );
      return this.products;
    
  }

  // Get Search Result
  getProducts(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    this.getProductList(val);
    
    // if the value is an empty string don't filter the product
    if (val && val.trim() != '') {
      this.isProductAvailable = true;
      this.products = this.products.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  // Go to product details page function
  async goToProductDetails(product) {
    const modal = await this.modalController.create({
      component: ProductDetailsComponent,
      componentProps: product
    });
    return await modal.present();
  }

  // Go to cart page function
  async gotoCartPage() {
    this.router.navigate(['/cart']);
  }

  // Back to previous page function
  dismiss() {
    this.router.navigate(['/tabs/tab1']);
  }
}
