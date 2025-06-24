import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  registrationSuccess: boolean = false;
  errorMessage: string = '';
  registerForm: FormGroup | undefined;


  constructor(private router: Router) {}

  register() {

    if (this.password === this.confirmPassword) {
      // Save user details to localStorage (mock)
      localStorage.setItem('user', JSON.stringify({
        name: this.name,
        email: this.email,
        password: this.password
      }));
      this.registrationSuccess = true;
      setTimeout(() => this.router.navigate(['/login']), 1500);
    } else {
      alert('Passwords do not match!');
    }
  }
}
