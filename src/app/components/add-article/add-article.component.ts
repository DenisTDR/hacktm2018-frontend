import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {Publication} from '../../models/publication';
import {MatDialog, MatSnackBar, MatDialogRef} from '@angular/material';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  public url: string;
  public loading: boolean;
  private data: any;

  constructor( private api: ApiService,
  private snackBar: MatSnackBar,
  private dialogRef: MatDialogRef<AddArticleComponent>) { }

  ngOnInit() {
  }

  public addNewArticle() {
    this.loading = true;
    return this.api.saveArticle(this.url).subscribe(
      data => { 
        this.data = data; 
        this.snackBar.open('News added successfully!', 'Ok', {
          duration: 10000
        });
        this.dialogRef.close(true);
        this.loading = false;
      },
      err => {
        this.loading = false;
        console.log(err);
      }
    );
  }
}
