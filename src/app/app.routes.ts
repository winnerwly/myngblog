import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'page/home',
    pathMatch: 'full'
  },
  {
    path: 'page',
    redirectTo: 'page'
  }
];
export const routing = RouterModule.forRoot(routes);