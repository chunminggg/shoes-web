import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlePublishComponent }   from './article-publish/article-publish.component';
import { ArticleViewComponent }      from './article-view/article-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/view', pathMatch: 'full' },
  { path: 'view', component: ArticleViewComponent },
  { path: 'publish', component: ArticlePublishComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}