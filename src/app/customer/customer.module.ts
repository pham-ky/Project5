import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCartComponent } from './list-cart/list-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [ListCartComponent, CheckoutComponent, LoginComponent, OrderComponent, UserComponent],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
