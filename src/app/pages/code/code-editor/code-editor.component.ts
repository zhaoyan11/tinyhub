import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/matchbrackets';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() model: string ;
  @Output() modelChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('textAreaElement', {static: false}) textAreaElement: ElementRef;
  private editor: any;
  private subscription: Subscription;
  constructor() { }

  initEditor(): void {
    this.editor = CodeMirror.fromTextArea(this.textAreaElement.nativeElement, {
      smartIndent: true,
      lineWrapping: true,
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      theme: 'idea'
    });

    this.editor.setValue(this.model);

    this.subscription = fromEvent(this.editor, 'change')
      .pipe(debounceTime(500))
      .subscribe( e => {
        this.model = this.editor.getValue();
        this.modelChange.emit(this.model);
        console.log(this.model);
      });
  }


  ngOnInit(): void {
    this.model = this.model || '';
  }

  ngAfterViewInit(): void {
    this.initEditor();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
