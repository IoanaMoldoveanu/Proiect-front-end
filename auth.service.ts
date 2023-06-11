

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() { }

  login() {
    // Implementați logica pentru autentificare
    this.isAuthenticated = true;
  }

  logout() {
    // Implementați logica pentru deconectare
    this.isAuthenticated = false;
  }

  getIsAuthenticated() {
    // Returnează starea de autentificare curentă
    return this.isAuthenticated;
  }
}

