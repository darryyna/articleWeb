import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article.model';
import { selectSelectedArticle } from '../../state/articles/articles.selectors';
import { loadArticle } from '../../state/articles/articles.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss'
})
export class ArticleDetailsComponent implements OnInit {

  public article!: Article;
  article$ = this.store.select(selectSelectedArticle);

  constructor(private readonly store: Store, private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(loadArticle({ id }));
  }
}
