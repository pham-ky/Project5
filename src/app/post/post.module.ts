import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';



@NgModule({
  declarations: [PostComponent, PostListComponent, PostDetailComponent],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
