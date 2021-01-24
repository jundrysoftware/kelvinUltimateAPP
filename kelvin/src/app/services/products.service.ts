import { Injectable } from '@angular/core';
import { MethodApiServiceService } from '../services/method-api-service.service';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any[] = [];

  constructor(private _methodsApiRestService: MethodApiServiceService) { }

  productList() {
    this.products = [];
    this._methodsApiRestService.GetMethod('getAll_product_controller.php')
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
            Swal.fire("Ups!", "Error en Petición", "error");
          }
        }
      );
      return this.products;
  }
  productListByID(idpro) {
    this.products = [];
    this._methodsApiRestService.GetMethod('getAll_product_controller.php?id='+idpro)
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
            Swal.fire("Ups!", "Error en Petición", "error");
          }
        }
      );
      return this.products;
  }
}
