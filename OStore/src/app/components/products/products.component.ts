import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  category$;
  category;
  cart = {};

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService: ShoppingCartService) { }

  async ngOnInit() {
    this.productService.getAll().snapshotChanges().pipe(
      map(actions =>
        actions.map(a => ({ key: a.key, value: a.payload.val() }))
      )
    ).subscribe(products => {
      this.products = this.filteredProducts = products;

      this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');

        this.filteredProducts = (this.category) ?
                this.products.filter(product => product.value.Category === this.category) :
                this.products;
      });
    });
    this.category$ = this.categoryService.getAll().snapshotChanges().pipe(
      map(actions =>
        actions.map(a => ({ key: a.key, value: a.payload.val() }))
      )
    );

    ( await this.cartService.getCart()).snapshotChanges().pipe(
      map(actions =>
        actions.map(a => ({ key: a.key, value: a.payload.val() }))
      )
    ).subscribe(cart => {
      console.log('cart');
      cart.forEach(el => {
        this.cart = el;
        console.log(el);
      });
    });
  }

  addToCart(product) {
    console.log('in addto cart');
    this.cartService.addToCart(product);
  }

  removeFromCart(product) {
    this.cartService.removeFromCart(product);
  }

  getQuantity(productId) {
    console.log(this.cart);
    if (this.cart === {}) {
      return 0;
    } else {
    console.log('Danger execute');
       // tslint:disable-next-line:no-unused-expression
    const item =  this.cart.value[productId];
    return item ? item.quantity : 0;
    }
  }
}
