import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export const prodRoute: Routes = [
  {
    path: ':id',
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
    HttpClientModule,
    FormsModule,
    NgbModule
    
  ]
})
export class ProductModule { }
