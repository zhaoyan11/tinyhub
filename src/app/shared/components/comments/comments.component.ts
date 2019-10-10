import { Component, Input, OnInit } from '@angular/core';
import { TempHttpService } from '../../services/temp-http.service';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() data: any;
  public submitting = false;
  public user: any;
  public inputValue = '';

  constructor(
    private router: Router,
    private tempHttp: TempHttpService,
    private authorization: AuthorizationService
  ) { }


  ngOnInit() {
    this.user = {
      userName: localStorage.getItem('userName') || '',
      avatar: localStorage.getItem('avatar') || '',
    };
  }


  fetch() {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';

    this.tempHttp.comment({})
      .subscribe( res => {
        if (res.code === 200) {
          this.submitting = false;
          this.data = [
            ...this.data,
            {
              author: this.user.userName,
              avatar: this.user.avatar,
              content,
              datetime: new Date()
            }
          ].map(e => {
            return {
              ...e
            };
          });
        }
      });
  }


  handleSubmit(): void {
    this.authorization.checkLogin();
  }
}
