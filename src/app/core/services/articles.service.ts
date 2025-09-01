import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public articles:  Article[] = [
    {
      id: 1,
      title: 'Перший заголовок',
      publicationDate: '2025-09-01',
      description: 'Це приклад довгого тексту, який буде обрізатися у картці. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nun. Donec euismod, nisl eget consectetur sagittis, nisl nun Donec euismod, nisl eget consectetur sagittis, nisl nun Donec euismod, nisl eget consectetur sagittis, nisl nun',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // мок картинка
    },
    {
      id: 2,
      title: 'Другий заголовок',
      publicationDate: '2025-08-28',
      description: 'Ще один опис, який буде показаний в картці. Тут може бути скільки завгодно тексту, але він обмежується висотою картки.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      title: 'Третій заголовок',
      publicationDate: '2025-08-25',
      description: 'Короткий опис для тесту. Тут мало тексту, тому обрізання не потрібно.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }

  getArticleById(id: number): Observable<Article> {
    return of(this.articles.find(a => a.id === id)!);
  }
}
