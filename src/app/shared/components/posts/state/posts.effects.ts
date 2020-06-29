import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { PostsService } from '../posts.service';
import { ApiError, ApiGetMockData, ApiSuccess } from './posts.actions';

@Injectable()
export class PostsEffects {

  constructor(
    private actions$: Actions,
    private postsService: PostsService
  ) { }

  // effect from simulating an API call success
  loadPosts$ = createEffect(
    () => this.actions$.pipe(
      ofType(ApiGetMockData),
      tap(() => { console.log('Data fetch in queue'); }),
      mergeMap((action) => {
        return this.postsService.getAll().pipe(
          map(res => ApiSuccess({ data: res })),
          catchError(error => of(ApiError({ error }))),
          tap(() => { console.log('Get Data Finished'); })
        );
      }
      )
    )
  );
}
