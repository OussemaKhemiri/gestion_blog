import { Injectable } from '@angular/core';
import { post } from '../models/post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  postList(): Observable<post[]> {
    return this.http.get<post[]>(this.apiUrl);
  }

  addPost(post:post):Observable<post> {
    return this.http.post<post>(this.apiUrl, post);
  }

  postById(id:any){
    return this.http.get<post>(`${this.apiUrl}/${id}`);
  }
}
