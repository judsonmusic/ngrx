import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiGetMockData } from './state/posts.actions';
import { PostsState } from './state/posts.reducer';
import { getStateError, getStateSelectedData } from './state/posts.selectors';

@Component({
  selector: 'ngrx-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  error$: Observable<string>;
  data$: Observable<string>;
  JSON = JSON;

  constructor(private store: Store<{ postsState: PostsState }>) {
    this.error$ = this.store.select(getStateError);
    this.data$ = this.store.select(getStateSelectedData);
  }

  ngOnInit() {
    // this.getApiData();
  }

  getApiData() {
    // dispatches the ApiGetMocklData event.
    this.store.dispatch(ApiGetMockData({id: 'randomId'}));
  }
}
