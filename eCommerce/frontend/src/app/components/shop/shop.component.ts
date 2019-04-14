import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, OnDestroy {

  items = [1, 1, 1, 1, 1, 11, 1, 1, 1, 11, 111];
  subscription: Subscription;
  products = {};

  constructor(
    private product: ProductService
  ) { }

  ngOnInit() {
    this.subscription = this.product.getAll().subscribe(data => {
        this.products = data;
        console.log(data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
