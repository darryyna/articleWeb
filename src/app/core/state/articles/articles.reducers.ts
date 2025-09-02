import { createReducer, on } from '@ngrx/store';
import * as ArticlesActions from './articles.actions';
import { Article } from '../../models/article.model';
import { filterArticles } from '../../utils/articles.utils';

export interface ArticlesState {
  articles: Article[];
  selectedArticle: Article | null;
  filteredArticles: Article[];
  searchKeywords: string;
  isLoading: boolean;
  error: any;
}

export const initialState: ArticlesState = {
  articles: [],
  selectedArticle: null,
  filteredArticles: [],
  searchKeywords: '',
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
    articles,
    filteredArticles: state.searchKeywords
      ? filterArticles(articles, state.searchKeywords)
      : articles
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
  })),

  on(ArticlesActions.setSearchKeywords, (state, { keywords }) => ({
    ...state,
    searchKeywords: keywords,
    filteredArticles: keywords
      ? filterArticles(state.articles, keywords)
      : state.articles
  })),

  on(ArticlesActions.clearSearch, state => ({
    ...state,
    searchKeywords: '',
    filteredArticles: state.articles
  }))
);
