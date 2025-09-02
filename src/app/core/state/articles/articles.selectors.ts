import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticlesState } from './articles.reducers';

export const selectArticlesState = createFeatureSelector<ArticlesState>('articles');

export const selectArticles = createSelector(
  selectArticlesState,
  state => state.articles
);

export const selectSelectedArticle = createSelector(
  selectArticlesState,
  state => state.selectedArticle
);

export const selectArticlesLoading = createSelector(
  selectArticlesState,
  state => state.isLoading
);

export const selectArticlesError = createSelector(
  selectArticlesState,
  state => state.error
);

export const selectIsLoading = createSelector(
  selectArticlesState,
  (state: ArticlesState) => state.isLoading
);
