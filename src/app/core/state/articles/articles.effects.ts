import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ArticlesActions from './articles.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ArticlesService } from '../../services/articles.service';
import {ErrorDialogComponent} from "../../components/shared/error-dialog/error-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class ArticlesEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly articlesService: ArticlesService,
    private readonly snackBar: MatSnackBar
  ) {}


  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.loadArticles),
      mergeMap(() =>
        this.articlesService.getArticles().pipe(
          map(res => ArticlesActions.loadArticlesSuccess({ articles: res.results })),
          catchError(error => {
            this.snackBar.openFromComponent(ErrorDialogComponent, {
              data: { message: 'Error while loading articles' },
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top'
            });
            return of(ArticlesActions.loadArticlesFailure({ error }));
          })
        )
      )
    )
  );

  loadArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.loadArticle),
      mergeMap(action =>
        this.articlesService.getArticleById(action.id).pipe(
          map(article => ArticlesActions.loadArticleSuccess({ article })),
          catchError(error => {
            this.snackBar.openFromComponent(ErrorDialogComponent, {
              data: { message: 'Error while loading the article' },
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top'
            });
            return of(ArticlesActions.loadArticleFailure({ error }));
          })
        )
      )
    )
  );
}
