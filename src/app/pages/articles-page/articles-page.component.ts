import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article';
import {ApiService} from '../../services/api.service';
import { MatDialog } from '@angular/material';
import { AddArticleComponent } from '../../components/add-article/add-article.component';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent implements OnInit {
   public articles: Article[];
   public filteredItems: Article[];
   public loadingArticles = false;
    constructor( private api: ApiService,
      private addNewArticleDialog: MatDialog) {
    }

    ngOnInit() {
      this.getArticles();
    }

    getArticles()
    {
      this.loadingArticles = true;
      this.api.getArticles().subscribe(
        ( data: any ) => {
          this.articles = <Article[]> data.result;
          this.assignCopy();//when you fetch collection from server.
          this.loadingArticles = false;
        },
        error => {
          this.loadingArticles = false;
          console.log(error);
        }
      );
    }

    public openAddArticleModal() {
      const dialogRef = this.addNewArticleDialog.open(AddArticleComponent, {width: '400px'});
      dialogRef.afterClosed().subscribe(res => {
        if(res == "OK")
          this.getArticles();
      });
    }

    assignCopy(){
      this.filteredItems = Object.assign([], this.articles);
    }
    filterItem(value){
        if(!value) this.assignCopy(); //when nothing has typed
        this.filteredItems = Object.assign([], this.articles).filter(
          item => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
    }
  }
