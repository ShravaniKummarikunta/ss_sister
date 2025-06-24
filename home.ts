import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';


interface Product {
  
}

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent, CommonModule, RouterLink, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
    items: any[] = [];
   image: string ='';
   name: string = '';
   description: string ='';
   price: string = '';
    
  products = [
    {
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
      name: 'Cotton Fabric',
      description: 'Soft and breathable cotton fabric, perfect for summer wear.',
      price: 250
    },
    {
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
      name: 'Silk Saree',
      description: 'Elegant silk saree with traditional patterns.',
      price: 1200
    },
    {
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
      name: 'Linen Shirt',
      description: 'Premium linen shirt material for formal and casual wear.',
      price: 600
    }
  ];
}
