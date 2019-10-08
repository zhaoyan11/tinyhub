import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-code-lang',
  templateUrl: './code-lang.component.html',
  styleUrls: ['./code-lang.component.css']
})
export class CodeLangComponent implements OnInit {
  @Input() ngModel: string | number;
  @Output() ngModelChange: EventEmitter<string | number> = new EventEmitter<string | number>();

  constructor() { }

  modelChange(e) {
    this.ngModel = e;
    this.ngModelChange.emit(e);
  }

  ngOnInit(): void {
  }

}
