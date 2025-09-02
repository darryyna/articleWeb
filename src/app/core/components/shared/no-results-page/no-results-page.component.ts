import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearSearch } from '../../../state/articles/articles.actions';

@Component({
  selector: 'app-no-results-page', // Змінив селектор
  templateUrl: './no-results-page.component.html',
  styleUrls: ['./no-results-page.component.scss']
})

export class NoResultsPageComponent {
  constructor(private readonly store: Store) {}

  clearSearch(): void {
    this.store.dispatch(clearSearch());
  }
}
