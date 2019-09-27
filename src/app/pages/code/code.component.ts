import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  public pubState = false;
  public nzGutterConfig: any = { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 32 };
  constructor() { }

  ngOnInit() {
  }


}
