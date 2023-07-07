import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
// ---
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
// ---自己的
import { PurchaseSearch } from './Purchase-Search/PurchaseSearch.component';
import { EmployeeCreate } from './Employee-Create/EmployeeCreate.component';
import { EmployeeUpdate } from './Employee-Update/EmployeeUpdate.component';
import { EmployeeSearch } from './Employee-Search/EmployeeSearch.component';
import { PurchaseCreate } from './Purchase-Create/PurchaseCreate.component';
import { HeaderERPComponent } from './Header-ERP/header-erp.component';
import { LoginERPComponent } from './Login-ERP/login-erp.component';
import { FooterERPComponent } from './Footer-ERP/footer-erp.component';

@NgModule({
  declarations: [
    AppComponent,
     HeaderERPComponent,
      LoginERPComponent,
      PurchaseSearch,
      PurchaseCreate,
      EmployeeCreate,
      EmployeeUpdate,
      EmployeeSearch,
      FooterERPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
