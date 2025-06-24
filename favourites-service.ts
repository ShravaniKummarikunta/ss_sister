import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  getFavouritesListener() {
    throw new Error('Method not implemented.');
  }
  private favourites: any[] = JSON.parse(localStorage.getItem('favourites') || '[]');

  getFavourites() {
    return this.favourites;
  }

  addFavourite(item: any) {
    if (!this.favourites.find(fav => fav.name === item.name)) {
      this.favourites.push(item);
      localStorage.setItem('favourites', JSON.stringify(this.favourites));
    }
  }

  removeFavourite(name: string) {
    this.favourites = this.favourites.filter(fav => fav.name !== name);
    localStorage.setItem('favourites', JSON.stringify(this.favourites));
  }
}