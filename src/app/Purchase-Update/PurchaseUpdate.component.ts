import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'PurchaseUpdate',
  templateUrl: './PurchaseUpdate.component.html',
  styleUrls: ['../../styles.css'],
})
export class PurchaseUpdate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/PurchaseUpdate']);
    }
}