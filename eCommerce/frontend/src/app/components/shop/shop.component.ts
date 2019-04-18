import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  products: any = [];
  newProducts: any[] = [];
  constructor(
    private product: ProductService,
    private route: ActivatedRoute
  ) { }

  mensCount = 0;
  womenCount = 0;
  childrenCount = 0;

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category');
    this.subscription = this.product.getAll().subscribe(data => {
        this.products = data;
        console.log(data);
        this.newProducts = this.products;

        // count products in  each category
        this.products.forEach(element => {
          if (element.category === 'Mens') {
            this.mensCount++;
          }
          if (element.category === 'Women') {
            this.womenCount++;
          }
          if (element.category === 'Children') {
            this.childrenCount++;
          }
        });
        if (category) {
          this.onFilter(category);
        }
    });
  }

  onFilter(category) {
    if (category === 'All') {
      this.newProducts = this.products;
    } else {
      this.newProducts = [];
      this.products.forEach(element => {
        console.log(element.category);
        if (element.category === category) {
            console.log('inside if ');
            this.newProducts.push(element);
        }
      });
    }

    console.log(this.newProducts);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
