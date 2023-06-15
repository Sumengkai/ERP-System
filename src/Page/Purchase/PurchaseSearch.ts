import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'PurchaseSearch',
  templateUrl: './PurchaseSearch.html',
  styleUrls: ['../PageMain.scss']

})
export class PurchaseSearch {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/PurchaseSearch']);
    }
}