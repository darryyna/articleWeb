import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Article } from "../models/article.model";
import { ArticlesService } from "../services/articles.service";
import {ErrorDialogComponent} from "../components/shared/error-dialog/error-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<Article | null> {

  constructor(
    private articlesService: ArticlesService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Article | null> {
    const id = Number(route.paramMap.get('id'));

    if (!id || isNaN(id)) {
      this.showErrorAndRedirect('Invalid article ID');
      return of(null);
    }

    return this.articlesService.getArticleById(id).pipe(
      catchError(error => {
        if (error.status === 404) {
          this.showErrorAndRedirect('Article not found');
        } else {
          this.showErrorAndRedirect('Error while loading the article');
        }

        return of(null);
      })
    );
  }

  private showErrorAndRedirect(message: string): void {
    this.snackBar.openFromComponent(ErrorDialogComponent, {
      data: { message },
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 100);
  }
}
