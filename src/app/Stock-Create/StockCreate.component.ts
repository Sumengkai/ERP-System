import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'StockCreate',
  templateUrl: './StockCreate.component.html',
  styleUrls: ['../../styles.css'],
})
export class StockCreate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/StockCreate']);
    }
}