import {Component, OnInit} from '@angular/core';
import {IPost} from "../models/IPost";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  posts: IPost[];
  pageOfPosts: IPost[];


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.posts = this.route.snapshot.data['posts'];
  }

  onChangePage(pageOfPosts: IPost[]) {
    this.pageOfPosts = pageOfPosts;
  }
}
