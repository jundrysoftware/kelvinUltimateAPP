import { Component, OnInit } from '@angular/core';
declare var Stripe;
import { HttpClient } from "@angular/common/http";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { MethodApiServiceService } from '../../services/method-api-service.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  stripe = Stripe('pk_test_51HdzaMJIWmXMvhqj9x3dBdLLpuuiYlI4EJcFF15XEvajtun9Qm6wu1SdopTvCYcML57NB5An5D62CdlGRytg6Wph00PkDTlUOG');
  card: any;
  valorpago : string = '0';
  cartProducts: Product[] = [];

  constructor(private http: HttpClient,private router: Router,
    public storageService: StorageService,
    private _methodsApiRestService: MethodApiServiceService) {
  }

  ngOnInit() {
    this.setupStripe();
    this.valorpago = localStorage.getItem('pagos');
    if(this.valorpago=='' || this.valorpago== null){
      this.valorpago = '0'
    }
  }

  setupStripe() {
    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = elements.create('card', { style: style });
    console.log(this.card);
    this.card.mount('#card-element');

    this.card.addEventListener('change', event => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      this.stripe.createSource(this.card).then(result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          this.makePayment(result);
        }
      });
    });
  }

  makePayment(token) {
    var name = localStorage.getItem('name');
    var email = localStorage.getItem('email');
    var amount = localStorage.getItem('pagos')+'00';
    if(parseInt(amount)>0){
      this.http
      .post('https://nenalinda.com:8443/create-charge', {
          token: token.source.id,
          name: name,
          email:email,
          amount:amount
        })
        .subscribe(data => {
          if(data['charge']['status'] = 'succeeded'){
            let datos = {
              price:localStorage.getItem('pagos'),
              status: 'approed',
              cliente : localStorage.getItem('iduser'),
              shipping : '123',
              tax : '12'
            }
            this._methodsApiRestService.PostMethod('create_orders_controller.php',datos)
            .subscribe(
              response => {
                if(response['code']==200){
                  let obj = JSON.parse(localStorage.getItem('_cap_my-cart'));
                  localStorage.removeItem("_cap_my-cart");
                  localStorage.removeItem("pagos");
                  for(let x of obj){
                    let prod={
                      orden:response['orden'],
                      product: x['id'],
                      cant: x['quantity']
                    }
                    this._methodsApiRestService.PostMethod('create_product_order_controller.php',prod)
                    .subscribe(
                      response => {
                       console.log(response);
                      },
                        error => {
                          if (!error.ok) {
                            Swal.fire("Ups!", "Error en Petición", "error");
                          }
                        }
                    );
                  }
                }
              },
                error => {
                  if (!error.ok) {
                    Swal.fire("Ups!", "Error en Petición", "error");
                  }
                }
            );
            this.valorpago = '0';
            this.router.navigate(['/tabs/tab1']);
            Swal.fire('Transaction succesfull!', 'Your transaction has been aproved succesfully', 'success');
          }else{
            Swal.fire('Transaction Error!', 'Status: ' + data['charge']['status'], 'error');
          }
        });
    }
  }

}
