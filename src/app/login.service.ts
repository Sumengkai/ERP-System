import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  LoginBol = false;
  // 
  tesStrACC ="123";
  // 
  Login(account:String){
    if(account==this.tesStrACC){
      this.LoginBol = !this.LoginBol;
      console.log(this.LoginBol);
      console.log("登入成功");
      
    }
  }
  constructor() { }
}
