import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../models/article';
import { ConstantsService } from './constants.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,
    private authService: AuthService,
    private constantService: ConstantsService) { }

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
    return this.http.get(this.constantService.apiUrl + 'api/articles');
  }

  saveArticle(url: string) {
    let urlObject = { 'url' : url };
    return this.http.post(this.constantService.apiUrl + 'api/articles', urlObject);
  }

  saveVote(id: string, value: string) {
    return this.http.post(this.constantService.apiUrl + 'api/articles/' + id + '/vote/' + value, null, this.authService.getOptions(true));
  }
}
