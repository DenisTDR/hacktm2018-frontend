import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { AuthStatus } from '../../models/authStatus.model';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from '../login/login.component';

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

  constructor(private dialog: MatDialog,
    private authService: AuthService) { }

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
    this.dialog.open(LoginComponent, {width: '400px'});
  }

  public doLogout(): void {
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
    this.menuItems = []
    const authInfo = this.authService.getAuthInfo();
    //if (authInfo != null) {
      this.menuItems.push({
        name: 'About',
        route: '/wash/wash'
      });
      this.menuItems.push({
        name: 'About',
        route: '/wash/wash'
      });
    //}
  }
}
