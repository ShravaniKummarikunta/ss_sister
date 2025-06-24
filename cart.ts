import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  getItems() {
    return this.items;
  }

  addToCart(item: any) {
    this.items.push(item);
  }

  clearCart() {
    this.items = [];
  }

  removeFromCart(index: number) {
    this.items.splice(index, 1);
  }
}