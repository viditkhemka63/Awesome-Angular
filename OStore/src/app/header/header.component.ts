import { Component, OnInit, OnChanges } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnInit {

  totalItems;

  constructor(
    public auth: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private cartService: ShoppingCartService) { }

    async ngOnInit() {
      const cart$ = await this.cartService.getCart();
      cart$.valueChanges().subscribe(cart => {
        console.log('in cart header');
        console.log(cart);
        cart.forEach(element => {
          console.log(element);
        });
      });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
