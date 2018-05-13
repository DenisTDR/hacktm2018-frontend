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

  getArticles() {
    this.api.getArticles().subscribe(
      ( data: any ) => {
        this.articles = [];
        const articles = <Article[]> data.result;
        this.articles[0] = articles[0];
        this.articles[1] = articles[1];
        this.articles[2] = articles[2];
      },
      error => {
        console.log(error);
      }
    );
  }
}
