import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  displayFormValues(f: NgForm) {
    console.log("Email:", f.value.email);
    console.log("Password:", f.value.password);
  }

  // eid?: number;
  // ename: string = "";
  // esalary?: number;
  // data: any;

  // storeData(f: NgForm) {
  //   if (f.valid) {
  //     alert('valid....')
  //     console.log(f.value)
  //     console.log(f.valid)
  //     console.log(f.controls)
  //     //  this.data=f.value.eid+""+f.value.ename+""+f.value.esalary;
  //     this.data = f.value;
  //   } else {
  //     alert('invalid')
  //   }
}


