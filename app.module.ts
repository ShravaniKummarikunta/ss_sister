import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { App } from '../app';
import { NavbarComponent } from '../components/navbar/navbar';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '@pages/register/register';
import { routes } from '../app.routes';

@NgModule({
  declarations: [ 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NavbarComponent,
    RouterModule.forRoot(routes, { useHash: true })  // enable hash-based URLs
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
