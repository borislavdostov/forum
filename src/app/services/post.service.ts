import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/interfaces/post';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {

  }

  loadPostList(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${apiUrl}/posts`);
  }
}
