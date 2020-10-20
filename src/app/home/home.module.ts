import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { PostComponent } from './post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
  ],
  exports: [
    HomeComponent,
    SlideComponent,
    ProductComponent,
    PostComponent
  ]
})
export class HomeModule { }
