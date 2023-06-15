import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'PurchaseCreate',
  templateUrl: './PurchaseCreate.html',
  styleUrls: ['../PageMain.scss']

})
export class PurchaseCreate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/PurchaseCreate']);
    }
}