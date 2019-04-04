import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { take } from 'rxjs/operators';
import { ShoppingCart } from '../models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  add(id, product) {
    console.log(product);
    this.db.list('/shopping-carts/' + id + '/products').push({
      product: product.key
    });
  }

  create() {
   return  this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<AngularFireList<ShoppingCart>> {
    const cartId = await this.getOrCreateCartId();
    return this.db.list('/shopping-carts/' + cartId);
  }

  async getOrCreateCartId() {
    const cartId = localStorage.getItem('cartId');
    if (cartId) {  return cartId; }

    const result = await this.create();
    localStorage.setItem('cartId', result.key);

    return result.key;
  }

  async addToCart(product) {
    this.updateItemQuantity(product, 1);
  }

  async removeFromCart(product) {
    this.updateItemQuantity(product, -1);
  }

  private async updateItemQuantity(product, change) {
    const cartId = await this.getOrCreateCartId();
    const item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.key);
    item$.valueChanges().pipe(
      take(1)
    ).subscribe(item => {
      console.log(item);
      if (item) {
        item$.update({ quantity: item.quantity + change });
      } else {
        // tslint:disable-next-line:object-literal-shorthand
        item$.set({ product: product, quantity: 1});
      }
    });
  }
}
