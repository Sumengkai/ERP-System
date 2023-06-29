import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
// ---自己的
import { PurchaseSearch } from './Purchase-Search/PurchaseSearch.component';
import { PurchaseCreate } from './Purchase-Create/PurchaseCreate.component';
import { HeaderERPComponent } from './Header-ERP/header-erp.component';
import { LoginERPComponent } from './Login-ERP/login-erp.component';
// ---
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, HeaderERPComponent, LoginERPComponent,PurchaseSearch,PurchaseCreate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
