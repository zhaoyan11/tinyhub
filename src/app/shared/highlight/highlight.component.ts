import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements OnInit, AfterViewInit {
  @ViewChild('codeText', {static: false}) codeText: ElementRef;
  constructor() { }

  public code = `
    const x = 5;
    function f() {
      console.log(56)
    }`;

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    const block = this.codeText.nativeElement;
    hljs.highlightBlock(block);
  }

}
