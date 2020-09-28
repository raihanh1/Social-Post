import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from './../interface/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();
  constructor() {}

  ngOnInit(): void {}
  submitPostForm(form: NgForm) {
    this.submitted.emit({
      title: form.value.title,
      thought: form.value.thought,
    });
    console.log(form.value);
  }
}
