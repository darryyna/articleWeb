import { createAction, props } from '@ngrx/store';
import { Article } from '../../models/article.model';

export const loadArticles = createAction('[Articles] Load Articles');

export const loadArticlesSuccess = createAction(
  '[Articles] Load Articles Success',
  props<{ articles: Article[] }>()
);

export const loadArticlesFailure = createAction(
  '[Articles] Load Articles Error',
  props<{ error: any }>()
);

export const setSearchKeywords = createAction(
  '[Articles] Set Search Keywords',
  props<{ keywords: string }>() );

export const clearSearch = createAction('[Articles] Clear Search');
