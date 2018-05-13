import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  public article: Article;
  private sub: any;
  private id: string;
  public loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];
      }
    );

    this.getArticle(this.id);
  }

  private getArticle(id: string) {
    this.loading = true;
    this.api.getArticle(id).subscribe(
      ( data: any ) => {
        this.article = data.body.result[0];
        //console.log(this.article);
        this.loading = false;
      },
      error => {
        this.loading = false;
      }
    );
  }

  public saveVote(value: any) {
    this.loading = true;
    this.api.saveVote(this.article._id, value).subscribe(
      ( data: any ) => {
        this.snackBar.open('Thank you for your vote!', 'Ok', {
          duration: 10000,
        });
        this.getArticle(this.id);
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.snackBar.open(error.error.err.message, 'Ok', {
          duration: 10000,
        });
        console.log(error.error.err.message);
      }
    );
  }
}

