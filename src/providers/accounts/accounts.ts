import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AccountsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccountsProvider {
  register_url = "http://192.168.1.5:8000/signup/";
  children_url = "http://192.168.1.5:8000/children/"
  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  constructor(public http: HttpClient) {
    console.log('Hello AccountsProvider Provider');
  }

  register(data){
    return this.http.post(this.register_url,data,{headers:this.headers});
  }

  getChildren(){
    return this.http.get(this.children_url);
  }
 

}
