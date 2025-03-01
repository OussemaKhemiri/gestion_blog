import { Component, OnInit } from '@angular/core';
import { post } from '../models/post';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form-component',
  templateUrl: './post-form-component.component.html',
  styleUrls: ['./post-form-component.component.css']
})
export class PostFormComponentComponent implements OnInit{

  post:post;

  constructor(private PostService: PostService , private router:Router ) { }

  ngOnInit() {
    this.post = new post(); 
  }
  
  save() {

    this.PostService.addPost(this.post).subscribe(
      () => {
        this.router.navigateByUrl("/posts");
      }
    )
  }
}
