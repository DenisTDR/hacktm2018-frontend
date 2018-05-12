import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public articles: Article[];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles()
  {
    this.api.getArticles().subscribe(
      ( data: any ) => {
        this.articles = <Article[]> data.result;
        this.articles.push(data.result[0]);
        this.articles.push(data.result[1]);
        this.articles.push(data.result[2]);
      },
      error => {
        console.log(error);
      }
    );
  }
}
