


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proiectfro';

  currentPage: string = 'home';


  setCurrentPage(page: string) {
    this.currentPage = page;
  }

  isLoginPage() {
    return window.location.pathname === '/login';
  }

  isRegisterPage() {
    return window.location.pathname === '/register';
  }
}