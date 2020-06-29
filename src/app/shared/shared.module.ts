import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsModule } from './components/posts/posts.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostsModule,
  ],
  exports: [
    PostsModule,
  ]
})
export class SharedModule { }
