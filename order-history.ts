import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-history',
  imports: [CommonModule],
  templateUrl: './order-history.html',
  styleUrls: ['./order-history.css']
})
export class OrderHistoryComponent {
  orders: any[] = [];

  constructor() {
    this.orders = JSON.parse(localStorage.getItem('orders') || '[]');
  }
}