import { createSelector } from '@ngrx/store';
import { PostsState } from './posts.reducer';

const getError = (state: PostsState): string => state.error;
const getSelectedData = (state: PostsState): any => state.posts;

const getStateError = createSelector(
  (state: any) => state.postsState,
  getError
);

/**
 * getStateSelectedData
 *
 * Literally gets the data from the state.
 */
const getStateSelectedData = createSelector(
  (state: {postsState: PostsState}) => state.postsState, getSelectedData);


export { getStateError, getStateSelectedData };

