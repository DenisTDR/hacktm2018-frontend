import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public article: Article;

  constructor() { }

  ngOnInit() {

    this.article = {url: '', title: '', date: new Date(), content: '', publication: ''};

  }

}
