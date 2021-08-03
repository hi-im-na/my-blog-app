import {Component, OnInit} from '@angular/core';
import {IPost} from "../../models/IPost";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {map} from "rxjs/operators";
import {IComment} from "../../models/IComment";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  currentPost: IPost;
  postComments: IComment[];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.currentPost = this.route.snapshot.data['post'];
    this.postComments = this.route.snapshot.data['comments'];
  }

  returnToHome() {
    this.router.navigate(['']);
  }
}
