import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  id;
  myProduct = {};

  constructor(
    private fb: FormBuilder,
    private product: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  createProduct: FormGroup;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.product.getOne(this.id).subscribe(data => {
      this.myProduct = data;
      console.log(this.myProduct);
    });

    this.createProduct = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.createProduct.valid) {
      console.log('Form submitted');
      console.log(this.createProduct.value);
      this.product.create(this.createProduct.value).subscribe( data => {
        console.log(data);
      });
      this.createProduct.reset();
    }
  }

}
