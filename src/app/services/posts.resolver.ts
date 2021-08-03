import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {PostsService} from "./posts.service";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<IPost[]> {

  constructor(private postsService: PostsService) {
  }

  resolve() {
    return this.postsService.getPosts();
  }
}
