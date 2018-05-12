import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute} from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  public article: Article;
  private sub: any;
  private id: string;

  constructor(private route: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];
      }
    );

    this.getArticle(this.id);
  }

  private getArticle(id: string) {
    this.api.getArticle(id).subscribe(
      ( data: any ) => {
        this.article = data.body.result[0];
      },
      error => {
        console.log(error);
      }
    );
  }
}

