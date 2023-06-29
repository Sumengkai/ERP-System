import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseServiceTestMock } from "../Purchase/PurchaseServiceTestMock";

@Component({
  selector: 'PurchaseSearch',
  templateUrl: './PurchaseSearch.component.html',
  styleUrls: ['../../styles.css'],

})

export class PurchaseSearch {
    constructor(private router: Router) {}
    PurchaseServiceTestMocks = PurchaseServiceTestMock;
  out(){
    console.log(this.PurchaseServiceTestMocks);
  }

    navigateToLogin() {
      this.router.navigate(['/PurchaseSearch']);
    }
}