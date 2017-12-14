import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service'
import  {Article} from '../article'
@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  articles:Article[]
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    var that = this
    this.articleService.getAllArticles().then(res=>{
      that.articles = res['message']
    })
  }

}
