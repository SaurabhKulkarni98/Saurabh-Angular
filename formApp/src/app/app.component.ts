import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formApp';
  name1:any
  phone1:any
  email1:any
  fun(data:any)
  {
    console.log(data)
    console.log(this.name1)
    console.log(this.phone1)
    console.log(this.email1)
  }
}
