import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableTagComponent } from './components/editable-tag/editable-tag.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightComponent } from './components/highlight/highlight.component';
import { BgColorRandomDirective } from './derevtives/bg-color-random.directive';
import { SearchResultTypePipe } from './pipes/search-result-type.pipe';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [
    EditableTagComponent,
    HighlightComponent,
    BgColorRandomDirective,
    SearchResultTypePipe
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
    HighlightComponent,
    SearchResultTypePipe,
    BgColorRandomDirective
  ]
})

export class SharedModule { }
