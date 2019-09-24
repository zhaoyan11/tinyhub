import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableTagComponent } from './editable-tag/editable-tag.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditableTagComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
  ],
  exports: [
    FormsModule,
    NgZorroAntdModule,
    EditableTagComponent
  ]
})

export class SharedModule { }
