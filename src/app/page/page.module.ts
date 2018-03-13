import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing} from './page.routes'

import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    PageComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    BlogComponent
  ],
  providers: [
    // {provide: 'todoService', useClass: TodoService}
    ]
})
export class PageModule {}