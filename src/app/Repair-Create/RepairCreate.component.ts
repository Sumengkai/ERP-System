import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'RepairCreate',
  templateUrl: './RepairCreate.component.html',
  styleUrls: ['../../styles.css'],

})
export class RepairCreate {
    constructor(private router: Router) {}

    navigateToLogin() {
      this.router.navigate(['/RepairCreate']);
    }
}