import { Component } from '@angular/core';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login-erp',
  templateUrl: './login-erp.component.html',
  styleUrls: ['./login-erp.component.scss']
})
export class LoginERPComponent {
  constructor(public LoginService: LoginService) {}
  account ="";
  pwd ="";





}
