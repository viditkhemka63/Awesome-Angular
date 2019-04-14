import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  create(product) {
    console.log('create method of product service ');
    return  this.http.post(`${this.uri}/products/create`, product);
  }

  getAll() {
    return this.http.get(`${this.uri}/products/getAll`);
  }

  update(product) {
    return this.http.post(`${this.uri}/products/update`, product);
  }

  getOne(id) {
    return this.http.get(`${this.uri}/products/getOne/${id}`);
  }

}
