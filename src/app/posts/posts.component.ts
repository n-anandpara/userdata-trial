import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Object;

  constructor( private post: DataService ) { }

  ngOnInit() {
    this.post.getPosts().subscribe(
      post => this.posts$ = post 
    )
  }

}
