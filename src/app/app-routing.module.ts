import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {PostsResolver} from "./services/posts.resolver";
import {PostDetailsComponent} from "./homepage/post-details/post-details.component";
import {CommentsResolver} from "./services/comments.resolver";
import {PostResolver} from "./services/post.resolver";
import {NewPostComponent} from "./homepage/new-post/new-post.component";
import {UserPostsComponent} from './user-posts/user-posts.component';


const routes: Routes = [
  {path: 'posts', component: HomepageComponent, resolve: {posts: PostsResolver}},
  {
    path: 'posts/:id',
    component: PostDetailsComponent,
    resolve: {
      post: PostResolver,
      comments: CommentsResolver
    }
  },
  {path: 'new-post', component: NewPostComponent},
  {path: 'user-posts', component: UserPostsComponent},
  {path: '', pathMatch: 'full', redirectTo: '/posts'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
