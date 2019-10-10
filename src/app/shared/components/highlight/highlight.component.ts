import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import hljs from 'highlight.js';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements AfterViewInit {
  @Input() code: string;
  @ViewChild('codeText', {static: false}) codeTextElement: ElementRef;
  constructor(private msg: NzMessageService) { }

  copy() {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(this.codeTextElement.nativeElement);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');

    setTimeout( () => {
      this.msg.success('已复制到剪切板');
      selection.removeAllRanges();
    }, 200);
  }

  ngAfterViewInit(): void {
    const block = this.codeTextElement.nativeElement;
    hljs.highlightBlock(block);
  }

}
