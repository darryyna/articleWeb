import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {selectSearchKeywords} from "../../../state/articles/articles.selectors";
import {setSearchKeywords, clearSearch } from "../../../state/articles/articles.actions";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {
  searchControl = new FormControl('');
  private destroy$ = new Subject<void>();

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.select(selectSearchKeywords)
      .pipe(takeUntil(this.destroy$))
      .subscribe(keywords => {
        if (this.searchControl.value !== keywords) {
          this.searchControl.setValue(keywords, { emitEvent: false });
        }
      });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(value => {
        const keywords = value?.trim() || '';
        if (keywords) {
          this.store.dispatch(setSearchKeywords({ keywords }));
        } else {
          this.store.dispatch(clearSearch());
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
