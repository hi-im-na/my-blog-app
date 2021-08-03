import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {IComment} from "../models/IComment";
import {catchError, map} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {
  }

  getAllComments(): Observable<IComment[]> {
    return this.http.get<any>('https://gorest.co.in/public/v1/comments')
      .pipe(
        map((response) => {
          return response.data as IComment[];
        }),
        catchError(this.handleError<any>('getComments', []))
      );
  }

  //Get comments of the current post by postId
  getPostComments(postId: number): Observable<IComment[]> {
    return this.http.get<any>(`https://gorest.co.in/public/v1/posts/${postId}/comments`)
      .pipe(
        map((response) => {
          return response.data as IComment[];
        }),
        catchError(this.handleError<any>('getPostComments', []))
      )
  }

  // change token to save
  saveComment(comment: IComment) {
    let token = 'a95e07046e8a6884134ff81eda18b47fb389b6c1d538882835c2755d1fad596e';
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };
    return this.http.post<IComment>(`https://gorest.co.in/public/v1/posts/${comment.post_id}/comments`, comment, options)
      .pipe(
        catchError(this.handleError<IComment>('saveComment'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }
}
