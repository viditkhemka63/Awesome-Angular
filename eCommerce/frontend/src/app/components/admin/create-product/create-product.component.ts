import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {


  constructor(
    private fb: FormBuilder,
    private product: ProductService) { }

  createProduct = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    imageUrl: ['', Validators.required],
    description: ['', Validators.required]
  });
  ngOnInit() {
  }

  onSubmit() {
    if (this.createProduct.valid) {
      console.log('Form submitted');
      // console.log(this.createProduct.value);
      this.product.create(this.createProduct.value).subscribe( data => {
        console.log(data);
      });
      this.createProduct.reset();
    }
  }

}
