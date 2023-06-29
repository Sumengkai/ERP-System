import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'ShippingSearch',
  templateUrl: './ShippingSearch.component.html',
  styleUrls: ['../../styles.css'],
})
export class ShippingSearch {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/ShippingSearch']);
    }
}