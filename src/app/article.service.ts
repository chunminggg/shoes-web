import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';
import { Urls } from './network/api.url'
import {Result} from './network/model.result'
@Injectable()
export class ArticleService {
  private urls = Urls
  constructor(private http: Http) { }
  getAllArticles() {

  }
  publishArticle(article) {
    article.author = "炳良"

    return this.http.post(this.urls.PublishArticle, article)
      .toPromise().then(response => response.json() as Result)
  }
}
