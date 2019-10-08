import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/matchbrackets';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements AfterViewInit {
  @Input() model: string;
  @Output() modelChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('textAreaElement', {static: false}) textAreaElement: ElementRef;
  private editor: any;
  constructor() { }


  ngAfterViewInit(): void {
    this.editor = CodeMirror.fromTextArea(this.textAreaElement.nativeElement, {
      smartIndent: true,
      lineWrapping: true,
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      theme: 'idea'
    });

    this.textAreaElement.nativeElement.on('change', e => {
      console.log(e);
    });
  }

}
