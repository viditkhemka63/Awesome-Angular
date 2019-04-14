import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private cart: ShoppingCartService
  ) { }

  ngOnInit() {
  }

  isLoggedIn() {
    // console.log('Current status is ' + this.auth.isLoggedIn());
    return this.auth.isLoggedIn();
  }

  logOut() {
    this.auth.logOut();
    this.router.navigate(['/home']);
  }

}
