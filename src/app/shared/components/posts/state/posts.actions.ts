import { createAction, props } from '@ngrx/store';

const API_GET_POSTS_DATA = '[Post Component] Mock API Get My Data';
const API_ERROR_ACTION   = '[Post Component] Mock API Error';
const API_SUCCESS_ACTION = '[Post Component] Mock API Success';

/**
 * ApiGetMockData
 *
 * Get all posts from the mock data service. No param required. This is done in the effect ofType Method.
 *
 */
export const ApiGetMockData = createAction(API_GET_POSTS_DATA, props<{ id: string }>());

/**
 * ApiError
 *
 * Returns an error from Get all posts from the mock data service. It passes the error to the reducer.
 *
 */
export const ApiError = createAction(API_ERROR_ACTION, props<{ error: any }>());

/**
 * ApiSuccess
 *
 * On success this actions gets called. It passes the data to the reducer.
 *
 */
export const ApiSuccess = createAction(API_SUCCESS_ACTION, props<{ data: any }>());
