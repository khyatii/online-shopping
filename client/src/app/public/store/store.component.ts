import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styles: []
})
export class StoreComponent implements OnInit {
  products: any[];
  constructor(private storeService: StoreService, public cart:Cart) { }

  ngOnInit() {
    this.storeService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

}
