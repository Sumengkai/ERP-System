import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'StockUpdate',
  templateUrl: './StockUpdate.component.html',
  styleUrls: ['../../styles.css'],
})
export class StockUpdate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/StockUpdate']);
    }
}