import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing} from './page.routes'

import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    PageComponent,
    HomeComponent
  ],
  providers: [
    // {provide: 'todoService', useClass: TodoService}
    ]
})
export class PageModule {}