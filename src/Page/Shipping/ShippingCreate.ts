import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'ShippingCreate',
  templateUrl: './ShippingCreate.html',
  styleUrls: ['../PageMain.scss']
})
export class ShippingCreate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/ShippingCreate']);
    }
}