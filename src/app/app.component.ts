import { Component } from '@angular/core';
import {delay, Observable} from "rxjs";
import { Store } from "@ngrx/store";
import { selectIsLoading } from "./core/state/articles/articles.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'article-web';
  isLoading$: Observable<boolean>;

  constructor(private readonly store: Store) {
    this.isLoading$ = this.store.select(selectIsLoading).pipe(
      delay(0)
    );
  }
}
