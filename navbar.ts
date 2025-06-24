import { Component } from '@angular/core';
import { Router, RouterModule  } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
isMenuOpen: any;
toggleMenu() {
throw new Error('Method not implemented.');
}
  constructor(private router: Router) {}
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
onLogin() {
  // authentication logic...
  this.router.navigate(['/home']); // navigate imperatively
}
}
