import { Component } from '@angular/core';
import { FavouritesService } from '../../services/favourites-service'; 
import { BehaviorSubject, Observable, tap } from 'rxjs';  
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-favourites',
  imports: [CommonModule],
  templateUrl: './favourites.html',
  styleUrls: ['./favourites.css']
})
export class FavouritesComponent {
  favourites: any[] = [];
  constructor(private favService: FavouritesService, private http: HttpClient) {}
  private favsSubj = new BehaviorSubject<any[]>([]);
  getFavourites(): void { 
    this.http.get<any[]>('/api/favourites')
      .subscribe((data: any[]) => { 
        this.favsSubj.next(data);
        this.favourites = data;
      });
  }
  getFavouritesListener(): Observable<any[]> {
    return this.favsSubj.asObservable();
  }
  }