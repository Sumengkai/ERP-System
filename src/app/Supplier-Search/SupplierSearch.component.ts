import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'SupplierSearch',
  templateUrl: './SupplierSearch.component.html',
  styleUrls: ['../../styles.css'],
})
export class SupplierSearch {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/SupplierSearch']);
    }
}