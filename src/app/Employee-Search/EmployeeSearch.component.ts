import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'EmployeeSearch',
  templateUrl: './EmployeeSearch.component.html',
  styleUrls: ['../../styles.css'],
})
export class EmployeeSearch {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/EmployeeSearch']);
    }
}