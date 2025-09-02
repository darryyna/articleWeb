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

export const loadArticle = createAction(
  '[Articles] Load Article',
  props<{ id: number }>()
);

export const loadArticleSuccess = createAction(
  '[Articles] Load Article Success',
  props<{ article: Article }>()
);

export const loadArticleFailure = createAction(
  '[Articles] Load Article Error',
  props<{ error: any }>()
);
