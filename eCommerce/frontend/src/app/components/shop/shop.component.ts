import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  products: any = {};
  newProducts: any[] = [];
  constructor(
    private product: ProductService
  ) { }

  ngOnInit() {
    this.subscription = this.product.getAll().subscribe(data => {
        this.products = data;
        console.log(data);
        this.newProducts = this.products;
    });
  }

  onFilter(category) {
    this.newProducts = this.products.array.forEach(element => {
      if (element.category === category) {
          this.newProducts.push(element);
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
