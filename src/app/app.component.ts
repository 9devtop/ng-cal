import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title : string = 'NineDevDemo';
  ketqua : number = 0;

  add(a: number, b: number):void {
    this.ketqua = a + b;
    console.log(`${a} + ${b} = ${this.ketqua}`);
  }

  // To call external API
  // constructor(private http: HttpClient){}
  // add(a: number, b: number):void {
  //   this.http.get<number>(`https://localhost:44371/api/values/cong/${a}/${b}`).subscribe(kq => {
  //     this.ketqua = kq;
  //     console.log(`API ${a} + ${b} = ${this.ketqua}`);
  //   });
  // }
}
