import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCartComponent } from './list-cart/list-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from '../product/wishlist/wishlist.component';

export const userdRoute: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'list-cart',
    component: ListCartComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];


@NgModule({
  declarations: [ListCartComponent, CheckoutComponent, LoginComponent, OrderComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userdRoute),
  ]
})
export class CustomerModule { }
