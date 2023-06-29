import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'ShippingCreate',
  templateUrl: './ShippingCreate.component.html',
  styleUrls: ['../../styles.css'],
})
export class ShippingCreate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/ShippingCreate']);
    }
}