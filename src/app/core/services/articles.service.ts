import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { Observable } from 'rxjs';
import { environment } from '../../enviroment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private readonly apiUrl = `${environment.apiUrl}/articles`;

  constructor(private readonly http: HttpClient) {}

  getArticles(): Observable<{ results: Article[] }> {
    return this.http.get<{ results: Article[] }>(this.apiUrl);
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}/`);
  }
}
