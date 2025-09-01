import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomePageComponent } from './core/components/home-page/home-page.component';
import { ArticleCardComponent } from './core/components/article-card/article-card.component';
import { ArticleDetailsComponent } from './core/components/article-details/article-details.component';
import { ErrorPageComponent } from './core/components/shared/error-page/error-page.component';
import { SearchInputComponent } from './core/components/shared/search-input/search-input.component';
import { LoaderComponent } from './core/components/shared/loader/loader.component';
import { ErrorDialogComponent } from './core/components/shared/error-dialog/error-dialog.component';
import { NoResultsPageComponent } from './core/components/shared/no-results-page/no-results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArticleCardComponent,
    ArticleDetailsComponent,
    ErrorPageComponent,
    SearchInputComponent,
    LoaderComponent,
    ErrorDialogComponent,
    NoResultsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,

    StoreModule.forRoot({}), // add later when store is ready
    EffectsModule.forRoot([]), // comment above also applies

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      trace: false,
      traceLimit: 75
    })
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
