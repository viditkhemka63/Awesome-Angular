import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  uri = 'http://localhost:3000';


  constructor(
    private http: HttpClient
  ) { }

  createItem(userId, productId, val) {
    return this.http.post(`${this.uri}/cart/creatItem`, {
      userId,
      productId,
      val
    });
  }

  findOne(userId, productId) {
    return this.http.post(`${this.uri}/cart/findOne`, {
      userId,
      productId
    });
  }

  getAll(userId) {
    return this.http.get(`${this.uri}/cart/getAll/${userId}`);
  }

  deleteOne(userId, productId) {
    return this.http.post(`${this.uri}/cart/deleteOne`, {
      userId,
      productId
    });
  }
}
