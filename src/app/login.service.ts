import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }
  // 屬性區塊
  LoginBol = false;
  keepLoginBol =false;
  tesStrACC ="123";
  empID = sessionStorage.getItem("empID");

  // 方法區塊 (自訂)
  keepLogin(){
    let keepLoginBol = sessionStorage.getItem("keepLoginBol");
    if(keepLoginBol){
      this.LoginBol = !this.LoginBol;
    }
  
  }
  Login(account:String,pwd:String){
    console.log("登入方法");
    
    const body = {
      id: account,
      pwd: pwd
    };
  
    const post: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    };
    const fetchPromise = fetch('http://localhost:8080/login_employee', post);
    const responsePromise = fetchPromise.then((response) => response.json());
  
    return responsePromise.then((data) => {
      console.log("登入員工的data");
      console.log(data);
      sessionStorage.setItem("empID",data.id);
      let empID = sessionStorage.getItem("empID");
      console.log(empID+"登入的員工ID");
      
      if(data.message=="Success"){
        alert("登入成功")
        this.LoginBol = true;
        this.keepLoginBol=true;
        sessionStorage.setItem("keepLoginBol",this.keepLoginBol.toString())
      }else{
        alert("登入失敗")
      }
    });
  }
  // 方法區塊 (內建)
  LoginOut(){
    console.log("登出方法");

  let empID = sessionStorage.getItem("empID");
    console.log(empID+"!!");
    const body = {
      id: empID,
    };
  
    const post: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    };
    const fetchPromise = fetch('http://localhost:8080/logout_employee', post);
    const responsePromise = fetchPromise.then((response) => response.json());
  
    return responsePromise.then((data) => {
      console.log(data);
      let empID = sessionStorage.getItem("empID");
      console.log(empID+"員工ID");
      sessionStorage.removeItem("empID");
      console.log(empID+"員工ID");
      if(data.message=="Success"){
        alert("登出成功")
        this.LoginBol = false;
        this.keepLoginBol=false;
      }else{
        alert("登出失敗")
      }
    });
  }

}
  
