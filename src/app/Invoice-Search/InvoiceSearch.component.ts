import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'InvoiceSearch',
  templateUrl: './InvoiceSearch.html',
  styleUrls: ['../../styles.css'],

})
export class InvoiceSearch {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/InvoiceSearch']);
    }
}