import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { OrderComponent } from './Components/order/order.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';
import { CartComponent } from './Components/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'Dashboard',component:DashBoardComponent},
  {path:'order',component:OrderComponent},
  {path:'wishlist',component:WishListComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes),BrowserModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
