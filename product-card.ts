import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
  isFavourite: boolean = false;

  constructor(private cartService: CartService) {}

  toggleFavourite() {
    this.isFavourite = !this.isFavourite;
  }

  addToCart() {
    this.cartService.addToCart({
      image: this.image,
      name: this.name,
      description: this.description,
      price: this.price
    });
    // Optionally show a message or snackbar
  }
}