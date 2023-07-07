import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../Employee/employee.service';
@Component({
  selector: 'EmployeeCreate',
  templateUrl: './EmployeeCreate.component.html',
  styleUrls: ['./EmployeeCreate.component.scss'],
  
})
export class EmployeeCreate {
    constructor(private router: Router,public EmployeeService: EmployeeService) {}
    // 屬性區塊
    pkID=""
    department=""
    name=""
    authority=""
    pwd=""
    departmentList:any[] =[]
    authorityList:any[] =[]
    showPwdBox = false
    pwdInputType: string = 'password'

    // ---------------------------------
    // 方法區塊 (自訂)
    showPwd(){  
      if (this.showPwdBox) {
        this.pwdInputType = 'text'; // Show password
      } else {
        this.pwdInputType = 'password'; // Hide password
      }
    }
    // ---------------------------------
    // 方法區塊 (內建)

    navigateToLogin() {
      this.router.navigate(['/EmployeeCreate']);
    }
    ngOnInit() {
      this.EmployeeService.findDepartmentAndAuthority().then((data) => {
        this.departmentList =data.department_list;
        this.authorityList =data.authority_list;
        console.log( this.departmentList);
        });
    
    
      

    }
    // ---------------------------------------------
    // 方法區塊(自訂)
    createEmployeeApi(pkID:String,department:String,name:String,authority:String,pwd:String) {
      if(pkID==""||department==""||name==""||authority==""){
        console.log("參數不能為空");
        alert("參數不能為空")
        return;
      }
      this.EmployeeService.createEmployeeApi(pkID,department,name,authority,pwd).then((data) => {
   
        console.log(data);
         
        if(data.message=="Success"){
         this. pkID=""
         this.  department=""
         this.  name=""
         this.  authority=""
         this.pwd=""
          
        }
        });
    }
}