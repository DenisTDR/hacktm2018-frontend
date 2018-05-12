import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getArticle(id: string ) {
    return this.http.get('https://adina-teudan.me/api/articles',
      {
        params: {
          _id: id
        },
        observe: 'response'
      });
  }

  getArticles() {
    return this.http.get('https://adina-teudan.me/api/articles');
  }
}
