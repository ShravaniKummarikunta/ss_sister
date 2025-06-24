import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard';
import { LoginComponent } from '../pages/login/login'; 
import { RegisterComponent } from '../pages/register/register';
import { Home } from '../pages/home/home';    
import { NavbarComponent } from '../components/navbar/navbar';
import { ParcelComponent } from '../pages/parcel/parcel';
import { DeliveryComponent } from '../pages/delivery/delivery'; 
import { AccountComponent } from '../pages/account/account'; 
import { FavouritesComponent } from '../pages/favourites/favourites'; 
import { CartComponent } from '../pages/cart/cart';
import { PaymentComponent } from '../pages/payment/payment';
import { OrderHistoryComponent } from '../pages/order-history/order-history';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
   { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/login' },
  { path: 'parcel', component: ParcelComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'account', component: AccountComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'order-history', component: OrderHistoryComponent},
   { path: '', component: Home },
  { path: 'parcel', component: ParcelComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export function logout(router: Router): void {
  localStorage.removeItem('loggedIn');
  router.navigate(['/login']);
}
