import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-publish',
  templateUrl: './article-publish.component.html',
  styleUrls: ['./article-publish.component.scss']
})

export class ArticlePublishComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
    
  }
  richModel = "请输入文章内容"
   onButtonSubmitClick() {
       debugger
    }
}
