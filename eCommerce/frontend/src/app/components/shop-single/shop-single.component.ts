import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.css']
})
export class ShopSingleComponent implements OnInit {
  id;
  myProduct = {};
  // tslint:disable-next-line:no-input-rename
  productCount = {};
  constructor(
    private route: ActivatedRoute,
    private product: ProductService,
    private cart: ShoppingCartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.product.getOne(this.id).subscribe(data => {
      this.myProduct = data;
    });

    if (localStorage.getItem('userId') !==  null) {
      this.cart.findOne(localStorage.getItem('userId'), this.id).subscribe(data => {
        this.productCount = data;
      });
    }
  }

  addToCart() {
    if ( localStorage.getItem('userId') !==  null) {
      this.cart.createItem(localStorage.getItem('userId'), this.id, 1).subscribe(data => {
        console.log(data);
        this.productCount = data;
      });
    } else {
      alert('user not login');
      this.router.navigate(['/login']);
    }
  }

  changeItemValue(val) {
    if ( localStorage.getItem('userId') !==  null) {
      this.cart.createItem(localStorage.getItem('userId'), this.id, val).subscribe(data => {
        console.log(data);
        this.productCount = data;
      });
    } else {
      alert('user not login');
      this.router.navigate(['/login']);
    }
  }
}
