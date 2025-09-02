import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticlesState } from './articles.reducers';

export const selectArticlesState = createFeatureSelector<ArticlesState>('articles');

export const selectIsLoading = createSelector(
  selectArticlesState,
  state => state.isLoading
);

export const selectFilteredArticles = createSelector(
  selectArticlesState,
  state => state.filteredArticles
);

export const selectSearchKeywords = createSelector(
  selectArticlesState,
  state => state.searchKeywords
);

export const selectArticlesError = createSelector(
  selectArticlesState,
  state => state.error
);
