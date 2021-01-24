import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MethodApiServiceService {

  domain="https://nenalinda.com/"; //Produccion
  //domain = "http://localhost/kelvin/";  //Desarrollo

  constructor(private http:HttpClient) { }

  public PostMethod(endpoint,params,domain=this.domain){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': '*'
    });
    //console.log(domain+endpoint);
    
   return this.http.post(domain+endpoint,JSON.stringify(params),{headers})
          .map(res => res );
  }

  public GetMethod(endpoint,domain=this.domain){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': '*'
    });
   return this.http.get(domain+endpoint,{headers})
          .map(res => res);
  }
}
