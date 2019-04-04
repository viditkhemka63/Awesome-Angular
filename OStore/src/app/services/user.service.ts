import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AppUser } from '../models/appUser.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  save(user: firebase.User) {
   this.db.list('/shopping-carts').push({
      userId: user.uid
   }).then(result => {
      console.log(result);
      this.db.object('/users/' + user.uid).update({
        name: user.displayName,
        email: user.email,
        shoppingCartId: result.key
      });
   });

  }

  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);
  }

}
