import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'EmployeeCreate',
  templateUrl: './EmployeeCreate.component.html',
  styleUrls: ['../../styles.css'],
  
})
export class EmployeeCreate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/EmployeeCreate']);
    }
}