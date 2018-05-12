import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  public article: Article;
  //@Input() hero: Hero;

  constructor(private api: ApiService) {

  }

  ngOnInit() {
   /* this.api.getArticle().subscribe(
      ( data: any ) => {
        this.article = <Article> data.result;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );*/
  }

}
