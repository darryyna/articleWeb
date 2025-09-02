import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { selectArticles } from '../../state/articles/articles.selectors';
import { Store } from '@ngrx/store';
import { loadArticles } from '../../state/articles/articles.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  articles: Article[] = [];
  articles$ = this.store.select(selectArticles);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadArticles());
  }
}
