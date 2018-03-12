import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'page',
    redirectTo: 'page/home',
    pathMatch: 'full'
  }, {
    path: 'page/home',
    component: HomeComponent
  }
];
export const routing = RouterModule.forChild(routes);