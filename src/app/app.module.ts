import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {BriefPipe} from './shared/brief.pipe';
import {PostAuthorComponent} from './homepage/post-author/post-author.component';
import {PostDetailsComponent} from './homepage/post-details/post-details.component';
import { HeaderComponent } from './header/header.component';
import { CommentFormComponent } from './homepage/post-details/comment-form/comment-form.component';
import { FooterComponent } from './footer/footer.component';
import { NewPostComponent } from './homepage/new-post/new-post.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import {JwPaginationModule} from "jw-angular-pagination";


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,

    BriefPipe,
    PostAuthorComponent,
    PostDetailsComponent,
    HeaderComponent,
    CommentFormComponent,
    FooterComponent,
    NewPostComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
