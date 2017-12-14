import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service'
import { Article } from '../article'
import { MatSnackBar } from '@angular/material';
import {Router} from '@angular/router'
@Component({
  selector: 'app-article-publish',
  templateUrl: './article-publish.component.html',
  styleUrls: ['./article-publish.component.scss']
})

export class ArticlePublishComponent implements OnInit {
  article: Article = {
    title: '',
    content: ''
  }
  constructor(private articleService: ArticleService, 
  public snackBar: MatSnackBar,
  private router: Router
  ) { }


  ngOnInit() {

  }
  richModel = "请输入文章内容"
  onButtonSubmitClick() {
    this.articleService.publishArticle(this.article).then(response => {
      if (response['resultCode'] == 200) {
        this.snackBar.open('操作成功', '文章已发布', {
          duration: 1500
        })
        this.router.navigate(['/view'])
      }
    })
  }
}
