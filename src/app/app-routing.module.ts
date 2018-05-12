import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import {ArticlesPageComponent} from './pages/articles-page/articles-page.component';

const routes: Routes = [
      {
        path: 'landing-page/',
        component: LandingPageComponent
      },
      {
        path: 'articles',
        component: ArticlesPageComponent
      },
      {
        path: '',
        redirectTo: 'landing-page/',
        pathMatch: 'full'
      },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
