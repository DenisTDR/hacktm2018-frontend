import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { 
  MatButtonModule, 
  MatToolbarModule, 
  MatMenuModule,
  MatDialogModule,
  MatSnackBarModule,
  MatInputModule,
  MatCheckboxModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const matImportedModule = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatDialogModule,
  MatSnackBarModule,
  MatInputModule,
  MatCheckboxModule
]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderMenuComponent,
    LoginComponent,
    RegisterComponent
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
  entryComponents: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
