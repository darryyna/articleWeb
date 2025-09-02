import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './core/components/home-page/home-page.component';
import { ArticleDetailsComponent } from './core/components/article-details/article-details.component';
import { ErrorPageComponent } from './core/components/shared/error-page/error-page.component';
import { ArticleResolver } from "./core/resolvers/article-details.resolver";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'details/:id', component: ArticleDetailsComponent,  resolve: { article: ArticleResolver } },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
