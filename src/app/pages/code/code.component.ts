import { Component, OnInit } from '@angular/core';
import { CodeData } from './model';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})

export class CodeComponent implements OnInit {
  public nzGutterConfig: any = { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 32 };
  public data: CodeData;
  constructor() { }

  ngOnInit() {
    this.data = {
      summary: null,
      category: null,
      lang: null,
      tags: null,
      pubState: false,
      codeText: null
    };
  }

  submit() {
    console.log(this.data);
  }
}
