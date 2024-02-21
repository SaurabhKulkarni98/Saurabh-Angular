import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rforms';
  form = new FormGroup({
    name:new FormControl("", [Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
    phone:new FormControl(),
    email:new FormControl()
  })
  signup(){
    console.log(this.form.value)
  }
}
