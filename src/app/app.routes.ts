import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page',
    redirectTo: 'page'
  }
];
export const routing = RouterModule.forRoot(routes);