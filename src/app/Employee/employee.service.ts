import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  // 1.--------------------------
  // 新增人員createEmployee
  createEmployeeApi(pkID:String,department:String,name:String,authority:String,pwd:String){

    console.log(pkID+"新增");   
    if(pkID==""||department==""||name==""||authority==""||pwd==""){
      console.log("參數不能為空");
      alert("參數不能為空")
      
    }
    
    const body = {
      id:pkID,
      department:department,
      name:name,
      authority:authority,
      pwd:pwd
    };
    console.log(body);
    
    const post: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    };
        const fetchPromise = fetch('http://localhost:8080/create_employee', post);
        const responsePromise = fetchPromise.then((response) => response.json());
  
  return responsePromise.then((data) => {
          console.log(data);
          
          if(data.message=="Success"){
            alert("新增成功")
            
          }else{
            alert("新增失敗")
          }
          
          return data; // 返回數據
        
        });
  
}

//   let departmentString = "";
//   let authorityString = "";

//   // 方法的其餘實作...
//       const body = {
//       id:pkID,
//       department:departmentString,
//       name:name,
//       authority:authorityString,
//       pwd:pwd
//     };
//     console.log(body);
    
    // const post: RequestInit = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(body)
    // };
        
//         const fetchPromise = fetch('http://localhost:8080/create_employee', post);
//         const responsePromise = fetchPromise.then((response) => response.json());
      
//   // 最後要記得回傳結果
//   return responsePromise.then((data) => {
//           console.log(data);
          
//           if(data.message=="Success"){
//             alert("新增成功")
            
//           }else{
//             alert("新增失敗")
//           }
          
//           return data; // 返回數據
        
//         });
// }
  // 2.--------------------------
  // 修改人員updateEmployee
  updateEmployeeApi(pkID:String,department:String,name:String,authority:String,pwd:String){
    console.log(pkID);   
    let empID = sessionStorage.getItem("empID");

    
    const body = {
      id:pkID,
      department:department,
      name:name,
      authority:authority,
      pwd:pwd,
      login_id:empID

    };
  
    const post: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    };
    const fetchPromise = fetch('http://localhost:8080/update_employee', post);
    const responsePromise = fetchPromise.then((response) => response.json());
  
    
    return responsePromise.then((data) => {
      console.log(data);
      if(data.message=="Success"){
        alert("修改成功")
        window.location.href="http://localhost:4200/EmployeeSearch"
      }else{
        alert("修改失敗")
      }
 
    
    });
  
}
  // 3.--------------------------
  // 查詢人員searchEmployeeApi
  searchEmployeeApi(pkID:String,department:String,name:String){
    let empID = sessionStorage.getItem("empID");
    console.log(pkID+"!!!");
    const body = {
      id:pkID,
      department:department,
      name:name,
      login_id:empID
    };
    const post: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    };
    const fetchPromise = fetch('http://localhost:8080/read_employee', post);
    const responsePromise = fetchPromise.then((response) => response.json());
    return responsePromise.then((data) => {
      console.log(data);
      if(data.message!="Success"){
        alert(data.message)
      }
      return data; // 返回數據
    });
}
  // 4.--------------------------
  // 查詢權限/部門findDepartmentAndAuthority
  findDepartmentAndAuthority(){

    const body = {
    
    };
    const post: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    };
    const fetchPromise = fetch('http://localhost:8080/all_authority_and_department', post);
    const responsePromise = fetchPromise.then((response) => response.json());
    return responsePromise.then((data) => {
      console.log(data);
    
      
      return data; // 返回數據
    });


  }
  
}


