
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;

  constructor() { }

  register() {
    // Implementați logica de înregistrare aici
    console.log('Butonul de înregistrare a fost apăsat');
    console.log('Nume:', this.name);
    console.log('Email:', this.email);
    console.log('Parolă:', this.password);
  }
}
