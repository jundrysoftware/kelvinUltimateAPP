import { Injectable } from '@angular/core';
import { MethodApiServiceService } from '../services/method-api-service.service';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: any[]= [];

  constructor(private _methodsApiRestService: MethodApiServiceService) { }

  categoryList() {
    this.categories = [];
    this._methodsApiRestService.GetMethod('getAll_category_controller.php')
      .subscribe(
        response => {
          if(typeof response[0] === 'undefined' || response[0] === null){
            //swal.fire("Ups!", "Usuario no encontrado", "error");
          }else{
            for (let x in response) {
              let datos={
                id:response[x].id,
                name:response[x].name,
                image:'assets/images/category/' + response[x].image
              }
              this.categories.push(datos);              
            }
          }
        },
          error => {
            if (!error.ok) {
              Swal.fire("Ups!", "Error en Petición", "error");
            }
          }
      );


    return this.categories;
  }

}
