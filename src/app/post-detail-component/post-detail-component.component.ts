import { Component, OnInit } from '@angular/core';
import { post } from '../models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-detail-component',
  templateUrl: './post-detail-component.component.html',
  styleUrls: ['./post-detail-component.component.css']
})
export class PostDetailComponentComponent implements OnInit {
  post : post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Get the ID from the route
    if (id) {
      this.postService.postById(id).subscribe(data => {
        this.post = data;
      });
    }
  }

}
