import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableTagComponent } from './editable-tag/editable-tag.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HighlightComponent } from './highlight/highlight.component';


@NgModule({
  declarations: [
    EditableTagComponent,
    HighlightComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
  ],
  exports: [
    FormsModule,
    NgZorroAntdModule,
    EditableTagComponent,
    HighlightComponent
  ]
})

export class SharedModule { }
