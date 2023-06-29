import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'RepairUpdate',
  templateUrl: './RepairUpdate.component.html',
  styleUrls: ['../../styles.css'],

})
export class RepairUpdate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/RepairUpdate']);
    }
}