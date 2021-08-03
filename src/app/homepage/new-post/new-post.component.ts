import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {PostsService} from 'src/app/services/posts.service';
import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  newPostForm: FormGroup;

  constructor(private router: Router, private postsService: PostsService) {
  }

  //default user is 122
  user_id: number = 122;

  ngOnInit(): void {
    this.newPostForm = new FormGroup({
      // name: new FormControl(),
      // email: new FormControl(),
      user_id: new FormControl(this.user_id),
      title: new FormControl(),
      body: new FormControl()
    })
  }

  savePost(post: any) {
    this.postsService.savePost(post).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  cancel(e: Event) {
    e.preventDefault();
    this.router.navigate(['/'])
  }

}
