import { Component, OnInit } from '@angular/core';
import { MethodApiServiceService } from '../../../services/method-api-service.service';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  //Variables del formulario
  name:string;
  lastname:string;
  phone:number;
  address:number;
  email:string;
  password:string;

  constructor(private _methodsApiRestService: MethodApiServiceService,
    public navCtrl: NavController) { }

  ngOnInit() {}

  sendRegistro(){
    let datos={
      "name":this.name,
      "lastname":this.lastname,
      "phone":this.phone,
      "address":this.address,
      "email":this.email,
      "password":this.password
    }
    this._methodsApiRestService.PostMethod('create_client_controller.php',datos)
    .subscribe(
      response => {
        if(response) {
          Swal.fire('Welcome', 'welcome to kelvin door open. your trusted ecommerce', 'success');
          localStorage.setItem('name', this.name);
          localStorage.setItem('email', this.email);
          this.navCtrl.navigateRoot('/tabs/tab1');
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
