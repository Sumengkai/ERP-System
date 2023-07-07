import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-erp',
  templateUrl: './header-erp.component.html',
  styleUrls: ['./header-erp.component.scss']
})
export class HeaderERPComponent {
  constructor(private router: Router,public LoginService: LoginService) {}
  
}
