import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RouterModule, Routes } from '@angular/router';


export const prodRoute: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  }
];


@NgModule({
  declarations: [ListComponent, DetailComponent, WishlistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoute),
  ]
})
export class ProductModule { }
