import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-forms',
  templateUrl: './product-forms.component.html',
  styleUrls: ['./product-forms.component.css']
})
export class ProductFormsComponent implements OnInit {

  categories$;
  id;
  product = {};
  constructor(
    private route: ActivatedRoute,
    private category: CategoryService,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.categories$ = this.category.getAll().snapshotChanges().pipe(
      map(actions =>
        actions.map(a => ({ key: a.key, value: a.payload.val() }))
      )
    );

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).valueChanges().pipe(
        take(1)
      ).subscribe(p => this.product = p);
    }

  }

  save(product) {
    console.log(product);
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.save(product);
    }
    this.router.navigate(['/admin/products']);
  }
  delete() {
    if (!confirm('Are  you sure ?? ')) {
      return ;
    }
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

}
