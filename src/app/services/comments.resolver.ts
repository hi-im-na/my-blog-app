import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IComment} from "../models/IComment";
import {CommentsService} from "./comments.service";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolver implements Resolve<IComment[]> {
  constructor(private commentsService: CommentsService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.commentsService.getPostComments(route.params['id']);
  }
}
