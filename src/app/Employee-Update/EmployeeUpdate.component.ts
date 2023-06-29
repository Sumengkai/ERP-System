import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'EmployeeUpdate',
  templateUrl: './EmployeeUpdate.html',
  styleUrls: ['../../styles.css'],
})
export class EmployeeUpdate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/EmployeeUpdate']);
    }
}