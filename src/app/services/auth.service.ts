import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ConstantsService } from './constants.service';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/register.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authHeaders: Headers;
  public noAuthHeaders: Headers;
  public options: RequestOptions;
  public authStatusChanged: EventEmitter<any> = new EventEmitter();
  private authInfo: any = null;
  private authToken: string = null;
  
  constructor(private http: Http,
    private constantsService: ConstantsService,
    private localStorage: LocalStorageService,
    private router: Router) { 
      this.loadLocal();

      this.noAuthHeaders = this.makeHeaders(false, true);
      this.authHeaders = this.makeHeaders(true, true);
      this.options = new RequestOptions({headers: this.authHeaders});
  }

  public login(model: LoginModel): Observable<any> {
    const url = this.constantsService.apiUrl + 'account/login';
    return this.http.post(url, model).pipe(map(response => {
        const data = response.json();
        this.doLogin(data);
        return data;
      })
    );
  }

  public logout(): void {
    this.localStorage.clear('authInfo');
    this.localStorage.clear('authToken');
    
    this.loadLocal();
    
    this.authHeaders.delete('Authorization');
    const status = { isLoggedIn: this.isLoggedIn() };
    
    this.authStatusChanged.next(status);
    this.router.navigate(['/landing-page']);
  }

  public getStatus(callback: (status: any) => void): void {
    const status = { isLoggedIn: this.isLoggedIn() };
    callback(status);
  }

  public getAuthInfo(): any {
    if(this.isLoggedIn())
      return this.authInfo;
    return null;
  }

  public register(model: RegisterModel): Observable<any> {
    const url = `${this.constantsService.apiUrl}Account/Register`;
    return this.http.post(url, model, this.options).pipe(
      map(response => response.json())
    );
  }

  public getOptions(needsAuth?: boolean, needsJson?: boolean) {
    let isValid = this.isTokenValid();
    if(isValid == true)
    {  
      const headers = needsAuth ? this.authHeaders : this.noAuthHeaders;
      return new RequestOptions({headers: headers});
    }
    else {
      this.logout();
    }
  }

  public getAuthToken() {
    return "Bearer " + this.authToken;
  }

  public isLoggedIn() {
    return this.authToken != null;
  }

  private parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  private doLogin(authInfo: any) {
    let name = this.parseJwt(authInfo.access_token).name;
    let authInfoObject: any = {
      name: name,
      tokenTime: authInfo.expires_in,
      tokenDate: new Date() 
    }
    this.localStorage.set("authToken", authInfo.access_token);
    this.localStorage.set("authInfo", authInfoObject);

    this.loadLocal();

    this.authHeaders.delete('Authorization');
    this.authHeaders.set('Authorization', 'Bearer ' + this.authToken);

    this.authStatusChanged.next({isLoggedIn: true});
  }

  private makeHeaders(putAuthToken? : boolean, putContentTypeJson? : boolean): Headers {
    const headers = new Headers();

    if(putContentTypeJson == true)
      headers.append('Content-Type', 'application/json');

    let token = this.localStorage.get('authToken');
    if(token && putAuthToken) {
        headers.delete('Authorization');
        headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  }

  private isTokenValid(): boolean {
    let authInfo = this.localStorage.get('authInfo');
    if(authInfo != null)
    {
      let tokenTime = authInfo.tokenTime;
      let tokenDate = new Date(authInfo.tokenDate);
      let currentDate = new Date();
      let timeDiff = Math.abs(currentDate.getTime() - tokenDate.getTime()) / 1000;
      return timeDiff <= tokenTime;
    }
    else return false;
  }

  private loadLocal() {
    this.authToken = this.localStorage.get('authToken');
    this.authInfo = this.localStorage.get('authInfo');
  }
}
