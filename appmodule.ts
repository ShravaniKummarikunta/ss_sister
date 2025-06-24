import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from '../app';
import { AppRoutingModule } from '../app-routing/app-routing-module'; 
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@components/navbar/navbar';

@NgModule({
  declarations: [
 
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: []
})
export class AppModule {}
