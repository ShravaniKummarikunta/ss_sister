import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parcel',
  imports: [CommonModule],
  templateUrl: './parcel.html',
  styleUrls: ['./parcel.css']
})
export class ParcelComponent {
  image = 'assets/sample.jpg';
  name = 'Sample Product';
  description = 'A short description of the product.';
  price = 299;
  isFavourite = false;

  toggleFavourite(): void {
    this.isFavourite = !this.isFavourite;
  }

  addToCart(): void {
    console.log('Added to cart!');
  }
}
