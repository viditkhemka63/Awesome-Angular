import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit, OnDestroy {

  constructor(
    private product: ProductService,
    private router: Router) { }

  subscription: Subscription;
  products;

  ngOnInit() {
    this.subscription = this.product.getAll().subscribe(data => {
      this.products = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  editClick(id) {
    console.log('Edit called with id' + id);

  }

  deleteClick(id) {
    console.log('Edit called with id' + id);
  }
}
