import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'StockCreate',
  templateUrl: './StockCreate.html',
  styleUrls: ['../PageMain.scss']
})
export class StockCreate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/StockCreate']);
    }
}