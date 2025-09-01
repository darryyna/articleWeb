import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticlesService } from '../../services/articles.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }
}
