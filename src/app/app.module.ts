import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule,MatButtonModule,MatToolbarModule} from '@angular/material'
import { AppComponent } from './app.component';
import { ArticlePublishComponent } from './article-publish/article-publish.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { AppRoutingModule } from './/app-routing.module';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    ArticlePublishComponent,
    ArticleViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    ButtonsModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    MatInputModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
