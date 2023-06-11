import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  login() {
    // Implement login logic here
    console.log('Login button clicked');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
