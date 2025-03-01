import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostDetailComponentComponent } from './post-detail-component/post-detail-component.component';
import { PostFormComponentComponent } from './post-form-component/post-form-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostDetailComponentComponent,
    PostFormComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
