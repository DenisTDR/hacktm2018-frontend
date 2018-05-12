import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent implements OnInit {

  public articles: Article[];

  constructor( private api: ApiService) {
  }

  ngOnInit() {
      this.api.getArticles().subscribe(
        ( data: any ) => {
          this.articles = <Article[]> data.result;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
