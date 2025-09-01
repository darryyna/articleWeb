import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article.model';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss'
})
export class ArticleDetailsComponent implements OnInit {

  public article!: Article;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticleById(id).subscribe(article => {
      this.article = article;
    });
  }
}
