import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-code-category',
  templateUrl: './code-category.component.html',
  styleUrls: ['./code-category.component.css']
})
export class CodeCategoryComponent {
  @Input() ngModel: string | number;
  @Output() ngModelChange: EventEmitter<string | number> = new EventEmitter<string | number>();

  constructor() { }

  modelChange(e) {
    this.ngModel = e;
    this.ngModelChange.emit(e);
  }


}
