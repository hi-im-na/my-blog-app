import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {IPost} from "../models/IPost";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {IComment} from "../models/IComment";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  // client-side pagination: meta not included
  getPosts(): Observable<IPost[]> {
    return this.http.get<any>(`https://gorest.co.in/public/v1/posts`)
      .pipe(
        map((response) => {
          return response.data as IPost[];
        }),
        catchError(this.handleError<any>('getPosts', []))
      );
  }

  getPostById(postId: number) {
    return this.http.get<any>(`https://gorest.co.in/public/v1/posts/${postId}`)
      .pipe(
        map((response) => {
          return response.data as IPost;
        }),
        catchError(this.handleError<any>('getPostById'))
      );
  }

  getPostsByUserId(userId: number) {
    return this.http.get<any>(`https://gorest.co.in/public/v1/users/${userId}/posts`)
      .pipe(
        map((response) => {
          return response.data as IPost[];
        }),
        catchError(this.handleError<any>('getPostsByUserId'))
      );
  }

  savePost(post: any) {
    let token = 'a95e07046e8a6884134ff81eda18b47fb389b6c1d538882835c2755d1fad596e';
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };
    return this.http.post<any>(`https://gorest.co.in/public/v1/posts`, post, options)
      .pipe(
        catchError(this.handleError<any>('savePost'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }
}
