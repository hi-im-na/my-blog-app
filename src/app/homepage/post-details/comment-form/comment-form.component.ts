import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {CommentsService} from "../../../services/comments.service";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  @Input()
  postId: number;

  commentForm: FormGroup;

  constructor(private router: Router, private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.commentForm = new FormGroup({
      post_id: new FormControl(this.postId),
      name: new FormControl(),
      email: new FormControl(),
      body: new FormControl()
    })
  }

  saveComment(formValues: any) {
    this.commentsService.saveComment(formValues).subscribe(() => {
      window.location.reload();
    })
  }
}
