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

  products = [];
  count;
  constructor(
    private auth: AuthService,
    private router: Router,
    private cart: ShoppingCartService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('userId') !== null) {
      this.cart.getAll(localStorage.getItem('userId')).subscribe(data => {
        this.products = data as Array<any>;
        console.log(this.products);
      });

      this.count = 0;
      this.products.forEach(element => {
        console.log(element);
        console.log(element.productCount);
        this.count += element.productCount;
      });
    }
  }

  isLoggedIn() {
    // console.log('Current status is ' + this.auth.isLoggedIn());
    return this.auth.isLoggedIn();
  }

  logOut() {
    this.auth.logOut();
    this.router.navigate(['/home']);
  }

  test() {
    this.cart.getAll(localStorage.getItem('userId')).subscribe(data => {
      this.products = data as Array<any>;
      console.log(this.products);
    });

    this.count = 0;
    this.products.forEach(element => {
      console.log(element);
      console.log(element.productCount);
      this.count += element.productCount;
    });
    }
  }


