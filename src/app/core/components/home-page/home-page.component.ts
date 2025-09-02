import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { selectFilteredArticles, selectSearchKeywords } from '../../state/articles/articles.selectors';
import { Store } from '@ngrx/store';
import { loadArticles } from '../../state/articles/articles.actions';
import { Observable } from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  articles$: Observable<Article[]> = this.store.select(selectFilteredArticles);
  searchKeywords$: Observable<string> = this.store.select(selectSearchKeywords);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadArticles());
  }
}
