import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { AuthStatus } from '../../models/authStatus.model';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from '../login/login.component';
import {AddArticleComponent} from '../add-article/add-article.component';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit, OnDestroy {

  public authName = '';
  public isLoggedIn: boolean;
  public menuItems: any[];
  public menuDisabled: boolean;
  private authStatusSubscription: Subscription = null;

  constructor(
    private loginDialog: MatDialog,
    private addNewArticleDialog: MatDialog,
    private authService: AuthService) {
      this.isLoggedIn = false;
      this.authService.getStatus(status => this.authStatusChanged(status));
      this.authStatusSubscription = this.authService.authStatusChanged.subscribe(status => this.authStatusChanged(status));
    }

  ngOnInit() {
    this.setMenuItems();
  }

  public ngOnDestroy(): void {
    if (this.authStatusSubscription) {
      this.authStatusSubscription.unsubscribe();
      this.authStatusSubscription = null;
    }
  }

  public openLoginModal(): void {
    //console.log('openLoginModal');
    this.loginDialog.open(LoginComponent, {width: '400px'});
  }

  public logout(): void {
    this.authService.logout();
  }

  private authStatusChanged(status: AuthStatus): void {
    this.setMenuItems();
    if (status.isLoggedIn) {
      const authInfo = this.authService.getAuthInfo();
      this.authName = authInfo.name || 'no name';
    }
    this.isLoggedIn = status.isLoggedIn;
  }

  private setMenuItems() {
    this.menuItems = [];
    const authInfo = this.authService.getAuthInfo();
      this.menuItems.push({
        name: 'News',
        route: '/articles'
      });
  }

  public openAddArticleModal() {
    this.addNewArticleDialog.open(AddArticleComponent, {width: '400px'});
  }
}
