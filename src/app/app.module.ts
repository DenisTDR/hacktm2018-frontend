import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { ArticleComponent } from './components/article/article.component';

const matImportedModule = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderMenuComponent,
    ArticlesPageComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HttpModule,
    ...matImportedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
