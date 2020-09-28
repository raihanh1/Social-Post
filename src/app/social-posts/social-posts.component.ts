import { Component, OnInit } from '@angular/core';
import { Post } from './../interface/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.scss'],
})
export class SocialPostsComponent implements OnInit {
  show: boolean = false;
  posts: Post[] = [
    { title: 'First Post', thought: 'This is my first post' },
    { title: 'Second Post', thought: 'This is my second post' },
  ];
  constructor() {}

  ngOnInit(): void {}
  handleSubmit(post: Post): void {
    this.posts.push(post);
    this.show = false;
  }
  handleDelete(i: number) {
    this.posts.splice(i, 1);
  }
  showForm(): void {
    this.show = true;
  }
}
