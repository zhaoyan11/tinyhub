import { Component, OnInit } from '@angular/core';
import { UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  public pubState = false;
  public nzGutterConfig: any = { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 32 };
  public fileList: UploadFile[] = [];
  constructor() { }

  ngOnInit() {
  }

  beforeUpload = (file: UploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  }
}
