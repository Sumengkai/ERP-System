import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'StockSearch',
  templateUrl: './StockSearch.html',
  styleUrls: ['../PageMain.scss']
})
export class StockSearch {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/StockSearch']);
    }
}