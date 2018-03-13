import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
  {
    path: 'page',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'user',
    component: UserComponent
  }, {
    path: 'admin',
    component: AdminComponent
  }, {
    path: 'blog',
    component: BlogComponent
  }
];
export const routing = RouterModule.forChild(routes);