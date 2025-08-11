import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor() { }

  displayFormValues(myForm: NgForm) {
    console.log("Name:", myForm.value.name);
    console.log("Email:", myForm.value.email);
    console.log("Password:", myForm.value.password);
    console.log("Confirm Password:", myForm.value.confirmPassword);
  }
}