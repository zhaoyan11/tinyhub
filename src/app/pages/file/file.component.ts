import { Component, OnInit } from '@angular/core';
import { UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  fileList: UploadFile[] = [];
  constructor() { }

  ngOnInit() {
  }

  beforeUpload = (file: UploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  }
}
