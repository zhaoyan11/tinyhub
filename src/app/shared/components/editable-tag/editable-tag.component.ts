import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editable-tag',
  templateUrl: './editable-tag.component.html',
  styleUrls: ['./editable-tag.component.css']
})

export class EditableTagComponent implements OnInit {
  public tags: Array<{label: string, color: string}> = [];
  public tagLimit = 5;
  public colors: string[];
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

  handleInputConfirm() {
    if (this.validate()) {
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.tags.push({label: this.inputValue, color});
    }

    this.inputVisible = false;
    this.inputValue = '';
  }

  validate(): boolean {
    const isDuplicate = this.tags.some( (value) => {
      return value.label === this.inputValue;
    });

    return Boolean(this.inputValue && !isDuplicate) ;
  }

  tagClosedHandle(tag) {
    const TagIndex = this.tags.findIndex( value => {
      return value.label === tag.label;
    });
    this.tags.splice(TagIndex, 1);
  }

  ngOnInit(): void {
    this.colors = [
      'magenta',
      'red',
      'volcano',
      'orange',
      'gold',
      'lime',
      'green',
      'cyan',
      'blue',
      'geekblue',
      'purple'
    ];
  }
}
