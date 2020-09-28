import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './../interface/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() deleted = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  handleDelete() {
    this.deleted.emit();
  }
}
