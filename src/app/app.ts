import { Component } from '@angular/core';
import { ProductComponent } from './product-component/product-component';

@Component({
  selector: 'app-root',
  imports: [ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  searchText: string = '';

  cartCount: number = 0;

  searchProduct(value: string) {
    this.searchText = value.trim();
  }

  updateCartCount(count: number) {
    this.cartCount = count;
  }

}