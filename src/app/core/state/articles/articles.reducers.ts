import { createReducer, on } from '@ngrx/store';
import * as ArticlesActions from './articles.actions';
import {Article} from '../../models/article.model';

export interface ArticlesState {
  articles: Article[];
  selectedArticle: Article | null;
  isLoading: boolean;
  error: any;
}

export const initialState: ArticlesState = {
  articles: [],
  selectedArticle: null,
  isLoading: false,
  error: null
};

export const articlesReducer = createReducer(
  initialState,

  on(ArticlesActions.loadArticles, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(ArticlesActions.loadArticlesSuccess, (state, { articles }) => ({
    ...state,
    isLoading: false,
    articles
  })),
  on(ArticlesActions.loadArticlesFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  on(ArticlesActions.loadArticle, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(ArticlesActions.loadArticleSuccess, (state, { article }) => ({
    ...state,
    isLoading: false,
    selectedArticle: article
  })),
  on(ArticlesActions.loadArticleFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);
