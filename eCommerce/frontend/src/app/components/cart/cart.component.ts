import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products;
  actualProducts: any[] = [];
  total = 0;
  constructor(
    private cart: ShoppingCartService,
    private product: ProductService,
    private route: Router
  ) { }

  ngOnInit() {
    this.cart.getAll(localStorage.getItem('userId')).subscribe(data => {
      this.products = data;
      console.log(this.products);

      this.products.forEach(element => {
        console.log('inside product array');
        this.product.getOne(element.productId).subscribe(da => {
          console.log(da);
          this.actualProducts.push(da);
        });
      });
      console.log('in array');
      console.log(this.actualProducts);
    });

  }

  findTotal() {
    console.log('find total called');
    this.total = 0;
    let i = 0;
    this.actualProducts.forEach(e => {
      this.total = this.total + this.products[i].productCount * e.price;
      i++;
    });
    // tslint:disable-next-line:prefer-for-of

    console.log('total final value');
    console.log(this.total);
  }

  deleteProduct(id) {
    this.cart.deleteOne(localStorage.getItem('userId'), id).subscribe(data => {
      console.log('navigat executed before product');
      console.log(data);
      this.ngOnInit();
      console.log('navigat executed');
      this.route.navigate(['/mycart']);
      });
  }

}
