import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import hljs from 'highlight.js';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements AfterViewInit {
  @ViewChild('codeText', {static: false}) codeText: ElementRef;
  constructor(private msg: NzMessageService) { }

  public code = `
    const x = 5;
    function f() {
      console.log(56)
    }`;

  copy() {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(this.codeText.nativeElement);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    setTimeout( () => {
      this.msg.info('已复制到剪切板');
    }, 150);
  }

  ngAfterViewInit(): void {
    const block = this.codeText.nativeElement;
    hljs.highlightBlock(block);
  }

}
