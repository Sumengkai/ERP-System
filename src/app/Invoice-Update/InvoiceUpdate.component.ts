import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'InvoiceUpdate',
  templateUrl: './InvoiceUpdate.component.html',
  styleUrls: ['../../styles.css'],

})
export class InvoiceUpdate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/InvoiceUpdate']);
    }
}