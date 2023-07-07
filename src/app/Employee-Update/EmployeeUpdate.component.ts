import { Component,Input , Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../Employee/employee.service';

@Component({
  selector: 'EmployeeUpdate',
  templateUrl: './EmployeeUpdate.component.html',
  styleUrls: ['./EmployeeUpdate.component.scss'],
})
export class EmployeeUpdate {
    constructor(private router: Router,public EmployeeService: EmployeeService) {}
      // 屬性區塊
      pkID=""
      department=""
      name=""
      authority=""
      pwd=""
      departmentList:any[] =[]
      authorityList:any[] =[]
      pwdInputType: string = 'password'
      showPwdBox = false
      @Input() item: any;
      @Output() cancelUpdateEmployeeInfo: EventEmitter<any> = new EventEmitter<any>();

      //  方法區塊 (內建)
      navigateToLogin() {
        this.router.navigate(['/EmployeeUpdate']);
      }
      ngOnInit() {
          this.EmployeeService.findDepartmentAndAuthority().then((data) => {
          this.departmentList =data.department_list;
            this.authorityList =data.authority_list;
            console.log(this.departmentList);
      });

            this.pkID =this.item.id
            this.name =this.item.name
            if(this.item.authority=="admin"){
              this.authority = "管理"
            }else if(this.item.authority=="manager"){
              this.authority = "主管"
            }else if(this.item.authority=="general"){
              this.authority = "一般"
            }
            if(this.item.department=="purchase"){
              this.department = "採購"
            }else if(this.item.department=="accountancy"){
              this.department = "會計"
            }

            
          }
        //  方法區塊 (自訂)
        showPwd(){  
          if (this.showPwdBox) {
            this.pwdInputType = 'text'; // Show password
          } else {
            this.pwdInputType = 'password'; // Hide password
          }
        }
        cancelUpdateEmployeeInfoFunction(employeeInfo:any){
          this.cancelUpdateEmployeeInfo.emit(employeeInfo);
        }

}