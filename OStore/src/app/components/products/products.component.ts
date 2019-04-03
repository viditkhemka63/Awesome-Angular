import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService) { }

  ngOnInit() {
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

  }
}
