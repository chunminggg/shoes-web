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
import {HttpClientModule} from '@angular/common/http';
import {ArticleService} from './article.service'
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http'
@NgModule({
  declarations: [
    AppComponent,
    ArticlePublishComponent,
    ArticleViewComponent
  ],
  imports: [
    FormsModule,
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
    MatGridListModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
