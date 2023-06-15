import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'ShippingUpdate',
  templateUrl: './ShippingUpdate.html',
  styleUrls: ['../PageMain.scss']
})
export class ShippingUpdate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/ShippingUpdate']);
    }
}