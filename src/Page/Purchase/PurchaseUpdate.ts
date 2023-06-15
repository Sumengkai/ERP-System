import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'PurchaseUpdate',
  templateUrl: './PurchaseUpdate.html',
  styleUrls: ['../PageMain.scss']

})
export class PurchaseUpdate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/PurchaseUpdate']);
    }
}