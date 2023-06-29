import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'SupplierUpdate',
  templateUrl: './SupplierUpdate.component.html',
  styleUrls: ['../../styles.css'],
})
export class SupplierUpdate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/SupplierUpdate']);
    }
}