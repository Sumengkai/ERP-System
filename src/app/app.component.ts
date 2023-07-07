import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public LoginService: LoginService) {}
  ngOnInit() {
    this.LoginService.keepLogin();
  };
    // ---------------------------------------------
   // 方法區塊(自訂)
    
  title = 'ERP-System';
}
