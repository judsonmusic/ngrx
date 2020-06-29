import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostsComponent } from './posts.component';
import { PostsEffects } from './state/posts.effects';
import { rootReducer } from './state/posts.reducer';



@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('postsState', rootReducer),
    EffectsModule.forFeature([PostsEffects])

  ],
  exports: [PostsComponent]
})
export class PostsModule { }
