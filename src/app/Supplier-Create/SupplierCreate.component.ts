import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'SupplierCreate',
  templateUrl: './SupplierCreate.component.html',
  styleUrls: ['../../styles.css'],
})
export class SupplierCreate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/SupplierCreate']);
    }
}