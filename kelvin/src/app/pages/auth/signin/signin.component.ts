import { Component, OnInit } from '@angular/core';
import { MethodApiServiceService } from '../../../services/method-api-service.service';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
//Variables del formulario
email:string;
password:string;

  constructor(private _methodsApiRestService: MethodApiServiceService,
    public navCtrl: NavController) { }

  ngOnInit() {}

  sendLogin(){
    let datos={
      "email":this.email,
      "password":this.password
    }
    this._methodsApiRestService.PostMethod('login_client_controller.php',datos)
    .subscribe(
      response => {
        if(response[0]['id']>0){
          this._methodsApiRestService.PostMethod('get_taxes_controller.php',datos)
          .subscribe(
            taxes => {
              localStorage.setItem('shipping', taxes[0]['shipping']);
              localStorage.setItem('tax', taxes[0]['tax']);
              localStorage.setItem('name', response[0]['name'] + ' ' + response[0]['lastname']);
              localStorage.setItem('iduser', response[0]['id']);
              localStorage.setItem('email', response[0]['email']);
              this.navCtrl.navigateRoot('/tabs/tab1');
            },
              error => {
                //console.log(error);
                if (!error.ok) {
                  
                }
              }
          );
        }else{
          Swal.fire('incorrect data', 'check the fields entered', 'error')
        }
      },
        error => {
          //console.log(error);
          if (!error.ok) {
            
          }
        }
    );
  }
}
