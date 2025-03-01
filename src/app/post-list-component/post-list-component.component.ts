import { Component, OnInit } from '@angular/core';
import { post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit{

  posts: post[];

  constructor(private equipeService: PostService) {}

  ngOnInit() {
    this.equipeService.postList().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
