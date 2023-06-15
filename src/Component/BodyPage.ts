import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'BodyPage',
  templateUrl: './BodyPage.html',
})
export class BodyPage {

}
// --------------------------
// 串API範例
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'BodyPage',
//   templateUrl: './BodyPage.html',
// })
// export class BodyPage implements OnInit {
//   apiUrl = 'https://randomuser.me/api/'; // 請替換為您的 API 網址
//   data: any;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.getDataFromApi();
//   }

//   getDataFromApi(): void {
//     this.http.get(this.apiUrl).subscribe(( response)=> {
//       this.data = response;
//       console.log(this.data);
      
      
//     });
//   }
// }
