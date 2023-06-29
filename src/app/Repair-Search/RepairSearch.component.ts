import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'RepairSearch',
  templateUrl: './RepairSearch.component.html',
  styleUrls: ['../../styles.css'],

})
export class RepairSearch {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/RepairSearch']);
    }
}