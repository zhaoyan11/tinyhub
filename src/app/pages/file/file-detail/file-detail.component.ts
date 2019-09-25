import { Component, OnInit } from '@angular/core';
import { distanceInWords } from 'date-fns';

@Component({
  selector: 'app-file-detail',
  templateUrl: './file-detail.component.html',
  styleUrls: ['./file-detail.component.css']
})
export class FileDetailComponent implements OnInit {
  data: Array<any> = [
    {author: '曾参', displayTime: new Date(), avatar: '曾', content: '还是师娘疼我啊'}
  ];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'han'
  };
  inputValue = '';

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: distanceInWords(new Date(), new Date())
        }
      ].map(e => {
        return {
          ...e,
          displayTime: distanceInWords(new Date(), e.datetime)
        };
      });
    }, 800);
  }

  ngOnInit(): void {
  }


}
