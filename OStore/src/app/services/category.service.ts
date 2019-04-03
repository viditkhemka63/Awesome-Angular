import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll(): AngularFireList<any[]> {
    return this.db.list('/categories', ref => ref.orderByChild('name'));
  }
}
