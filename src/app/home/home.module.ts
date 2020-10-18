import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { PostComponent } from './post/post.component';
import { RouterModule, Routes } from '@angular/router';

export const homeRoute: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [HomeComponent, SlideComponent, ProductComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),
  ],
  exports: [
    HomeComponent,
    SlideComponent,
    ProductComponent,
    PostComponent
  ]
})
export class HomeModule { }
