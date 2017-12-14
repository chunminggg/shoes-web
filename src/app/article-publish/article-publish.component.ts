import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service'
import  {Article} from '../article'
@Component({
  selector: 'app-article-publish',
  templateUrl: './article-publish.component.html',
  styleUrls: ['./article-publish.component.scss']
})

export class ArticlePublishComponent implements OnInit {
  article:Article = {
    title : '',
    content :''
  }
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    
  }
  richModel = "请输入文章内容"
   onButtonSubmitClick() {
       this.articleService.publishArticle(this.article).then(response=>{
         console.log(response)
       })
    }
}
