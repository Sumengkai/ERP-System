import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyPage } from 'src/Component/BodyPage';
import { Header } from 'src/Component/Header';
import { Login } from 'src/Component/Login';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,BodyPage,Header,Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
