import { createReducer, on } from '@ngrx/store';
import { ApiError, ApiSuccess } from './posts.actions';

export interface PostsState {
  error: any;
  posts: any;
}

const initialState: PostsState = {
  error: null,
  posts: null,
};

export const rootReducer = createReducer(initialState,
  on(ApiError, (state, action) => ({ error: action.error, posts: null })),
  on(ApiSuccess, (state, action) => ({ posts: action.data, error: null })),
);
