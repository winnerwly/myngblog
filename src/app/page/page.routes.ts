import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
  {
    path: 'page',
    redirectTo: 'page/home',
    pathMatch: 'full'
  }, {
    path: 'page/home',
    component: HomeComponent
  }, {
    path: 'page/user',
    component: UserComponent
  }, {
    path: 'page/admin',
    component: AdminComponent
  }, {
    path: 'page/blog',
    component: BlogComponent
  }
];
export const routing = RouterModule.forChild(routes);