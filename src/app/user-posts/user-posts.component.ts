import {Component, OnInit} from '@angular/core';
import {IPost} from "../models/IPost";
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  posts: IPost[];
  pageOfPosts: IPost[];

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    //default user is 122, since this project haven't have login function
    this.postsService.getPostsByUserId(122).subscribe((data) => {
      this.posts = data;
    })
  }

  onChangePage(pageOfPosts: IPost[]) {
    this.pageOfPosts = pageOfPosts;
  }
}
