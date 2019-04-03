import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: any[];
  filterProducts: any[];
  subscription: Subscription;

  constructor(private product: ProductService) {
    this.subscription = this.product.getAll().snapshotChanges().pipe(
      map(actions =>
        actions.map(a => ({ key: a.key, value: a.payload.val() }))
      )
    ).subscribe(items => {
      this.products = this.filterProducts = items;
      console.log(this.products);
    });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  filter(query: string) {
    console.log(query);
    this.filterProducts = (query) ?
      this.products.filter(p => p.value.title.toLowerCase() === query.toLowerCase())   :
      this.products;
  }
}
// p.value.title.toLowerCase().include(query.toLowerCase())
// p.value.title.toLowerCase() === query.toLowerCase()
