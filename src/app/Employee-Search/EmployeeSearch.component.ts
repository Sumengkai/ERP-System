import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../Employee/employee.service';

@Component({
  selector: 'EmployeeSearch',
  templateUrl: './EmployeeSearch.component.html',
  styleUrls: ['./EmployeeSearch.component.scss'],

})
export class EmployeeSearch {
    constructor(private router: Router,public EmployeeService:EmployeeService) {}
    // 屬性區塊
    pkID=""
    department=""
    name=""
    resList: any[] = [];
    idList: any[] = [];
    nameList: any[] = [];
    employeeInfo:any
    departmentList: any[] = [];
    showUpdateEmployeePageBol=false
    // ---------------------------------------------
    // 方法區塊(內建)
    navigateToLogin() {
      this.router.navigate(['/EmployeeSearch']);
    }
    ngOnInit() {
    this.EmployeeService.searchEmployeeApi('', '', '').then((data) => {
    this.resList = data.employee_list; // 將返回的資料指派給 resList 屬性
    for(let item of  this.resList ){
     this.idList.push(item.id)
     this.departmentList.push(item.department);
     this.nameList.push(item.name)
    }
    console.log(this.resList);
    console.log(this.idList);
    console.log(this.departmentList);

    
  });
    // ---------------------------------------------
   // 方法區塊(自訂)
    }
    searchEmployeeApi(pkID: string, department: string, name: string) {
      this.EmployeeService.searchEmployeeApi(pkID, department, name).then((data) => {
        this.resList = data.employee_list; 
      });
    }
    readyUpdateEmployeeInfo(employeeInfo:any){
    this.employeeInfo=employeeInfo
    console.log(this.employeeInfo);
    this.showUpdateEmployeePageBol =true
    }
    cancelUpdateEmployeePageBol(employeeInfo:any){
      console.log("employeeInfo");

      console.log(employeeInfo);
      
      this.showUpdateEmployeePageBol =false
          }

}