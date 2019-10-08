import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { colors } from '../../constants';

@Component({
  selector: 'app-colorful-tags',
  templateUrl: './colorful-tags.component.html',
  styleUrls: ['./colorful-tags.component.css']
})
export class ColorfulTagsComponent implements OnInit {
  @Input() model: Array<string>;
  @Input() colors: Array<string> = colors;
  @Input() addAble = false;
  @Input() maxTagNum = 5;
  @Output() modelChange: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  public tags: Array<{label: string, color: string}> = [];
  public inputVisible = false;
  public inputValue: string;
  @ViewChild('inputElement', { static: false }) inputElement: ElementRef;

  constructor() {}

  showInput() {
    this.inputVisible = true;
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 10);
  }

  inputConfirm() {
    if (this.validate()) {
      this.model.push(this.inputValue);
      this.tags.push({label: this.inputValue, color: this.getRandomColor()});
      this.modelChange.emit(this.model);
    }

    this.inputVisible = false;
    this.inputValue = '';
  }

  getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  validate(): boolean {
    const isDuplicate = this.model.some( (value) => {
      return value === this.inputValue;
    });

    return Boolean(this.inputValue && !isDuplicate) ;
  }

  tagClosedHandle(tag) {
    const TagIndex = this.model.findIndex( value => {
      return value === tag.label;
    });
    this.model.splice(TagIndex, 1);
    this.tags.splice(TagIndex, 1);
    this.modelChange.emit(this.model);
  }

  ngOnInit(): void {
    this.model = this.model || [];
    this.tags = this.model.map(value => {
      const color = this.getRandomColor();
      return {label: value, color};
    });
  }
}
