import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  items = [1, 1, 1, 1, 1, 11, 1, 1, 1, 11, 111];

  constructor() { }

  ngOnInit() {
  }

}
