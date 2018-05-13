import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ConstantsService } from './constants.service';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/register.model';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authHeaders: HttpHeaders;
  public noAuthHeaders: HttpHeaders;
  public options: any;
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
      this.options = {headers: this.authHeaders};
  }

  public login(model: LoginModel): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json',
    });
    const url = this.constantsService.apiUrl + 'api/auth/login';
    return this.http.post(url, model, { headers: headers }).pipe(map(response => {
        const data = response.json();
        console.log(data);
        this.doLogin(data);
        return data;
      })
    );
  }

  public logout(): void {
    this.localStorage.clear('authInfo');
    this.localStorage.clear('authToken');
    
    this.loadLocal();
    
    this.authHeaders = this.authHeaders.delete('Authorization');
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

  public register(model: RegisterModel): Observable<any> {4
    let headers = new Headers({
      'Content-Type': 'application/json',
    });
    const url = this.constantsService.apiUrl + 'api/auth/register';
    return this.http.post(url, model, {headers: headers}).pipe(
      map(response => response.json())
    );
  }

  public getOptions(needsAuth?: boolean) {
      const headers = needsAuth ? this.authHeaders : this.noAuthHeaders;
      return {headers: headers};
  }

  public getAuthToken() {
    return "JWT " + this.authToken;
  }

  public isLoggedIn() {
    return this.authToken != null;
  }

  private parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    console.log(window.atob(base64));
    return JSON.parse(window.atob(base64));
  }

  private doLogin(authInfo: any) {
    let name = this.parseJwt(authInfo.token).username;
    let authInfoObject: any = {
      name: name,
      user: authInfo.user,
      expires: authInfo.expires,
      token: authInfo.token
    }
    this.localStorage.set("authToken", authInfo.token);
    this.localStorage.set("authInfo", authInfoObject);
    this.loadLocal();

    this.authHeaders = this.authHeaders.delete('Authorization');
    this.authHeaders = this.authHeaders.set('Authorization', this.authToken);

    this.authStatusChanged.next({isLoggedIn: true});
  }

  private makeHeaders(putAuthToken? : boolean, putContentTypeJson? : boolean): HttpHeaders {
    let headers = new HttpHeaders();

    if(putContentTypeJson == true)
      headers.append('Content-Type', 'application/json');

    let token = this.localStorage.get('authToken');
    console.log(token);
    if(token && putAuthToken) {
      headers = headers.delete('Authorization');
      headers = headers.set('Authorization', token);
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
