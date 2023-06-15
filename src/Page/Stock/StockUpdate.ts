import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'StockUpdate',
  templateUrl: './StockUpdate.html',
  styleUrls: ['../PageMain.scss']
})
export class StockUpdate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/StockUpdate']);
    }
}