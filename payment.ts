import { Component } from '@angular/core';
import { CartService } from '../../services/cart'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  imports: [FormsModule, CommonModule],
  templateUrl: './payment.html',
  styleUrls: ['./payment.css']
})
export class PaymentComponent {
  items: any[] = [];
  name: string = '';
  cardNumber: string = '';
  expiry: string = '';
  cvv: string = '';
  paymentSuccess: boolean = false;

  constructor(private cartService: CartService) {}

  pay() {
    // ...existing payment logic...
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push({
      items: this.items,
      date: new Date(),
      total: this.items.reduce((sum, item) => sum + item.price, 0)
    });
    localStorage.setItem('orders', JSON.stringify(orders));
    this.paymentSuccess = true;
    this.cartService.clearCart();
  }
}