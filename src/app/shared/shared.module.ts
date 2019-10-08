import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableTagComponent } from './components/editable-tag/editable-tag.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightComponent } from './components/highlight/highlight.component';
import { SearchResultTypePipe } from './pipes/search-result-type.pipe';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NavBackComponent } from './components/nav-back/nav-back.component';
import { ColorfulTagsComponent } from './components/colorful-tags/colorful-tags.component';

@NgModule({
  declarations: [
    EditableTagComponent,
    HighlightComponent,
    SearchResultTypePipe,
    NavBackComponent,
    ColorfulTagsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    EditableTagComponent,
    HighlightComponent,
    SearchResultTypePipe,
    NavBackComponent,
    ColorfulTagsComponent
  ]
})

export class SharedModule { }
