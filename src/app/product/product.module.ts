import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { WishlistComponent } from './wishlist/wishlist.component';



@NgModule({
  declarations: [ListComponent, DetailComponent, WishlistComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
