import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'ShippingUpdate',
  templateUrl: './ShippingUpdate.component.html',
  styleUrls: ['../../styles.css'],
})
export class ShippingUpdate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/ShippingUpdate']);
    }
}