import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { OrderComponent } from './Components/order/order.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';
import { CartComponent } from './Components/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashBoardComponent,
    OrderComponent,
    WishListComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FlexLayoutModule,MatTabsModule,MatInputModule,FormsModule,ReactiveFormsModule,MatCardModule,HttpClientModule,MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
