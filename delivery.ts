import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery',
  imports: [CommonModule],
  templateUrl: './delivery.html',
  styleUrls: ['./delivery.css']
})
export class DeliveryComponent {
  deliveries = [
    { id: 1, status: 'Shipped', date: '2024-06-12', address: '123 Main St, City' },
    { id: 2, status: 'Delivered', date: '2024-06-10', address: '456 Market Rd, Town' }
  ];
}