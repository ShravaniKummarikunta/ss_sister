import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ss-sister';
}
