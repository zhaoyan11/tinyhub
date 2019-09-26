import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableTagComponent } from './editable-tag/editable-tag.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HighlightComponent } from './highlight/highlight.component';


@NgModule({
  declarations: [
    EditableTagComponent,
    HighlightComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    EditableTagComponent,
    HighlightComponent
  ]
})

export class SharedModule { }
