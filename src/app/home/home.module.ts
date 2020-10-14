import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [HomeComponent, SlideComponent, ProductComponent, PostComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
