import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {Publication} from '../../models/publication';
import {MatDialog} from '@angular/material';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  public url: string;

  private data: any;

  constructor( private api: ApiService) { }

  ngOnInit() {
  }

  public addNewArticle() {
    return this.api.saveArticle(this.url).subscribe(
      data => { this.data = data; },
      err => console.log(err)
    );
  }
}
