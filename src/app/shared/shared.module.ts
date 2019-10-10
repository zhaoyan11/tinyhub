import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightComponent } from './components/highlight/highlight.component';
import { SearchResultTypePipe } from './pipes/search-result-type.pipe';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NavBackComponent } from './components/nav-back/nav-back.component';
import { ColorfulTagsComponent } from './components/colorful-tags/colorful-tags.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DistanceInCNPipe } from './pipes/distance-in-cn.pipe';

@NgModule({
  declarations: [
    HighlightComponent,
    SearchResultTypePipe,
    NavBackComponent,
    ColorfulTagsComponent,
    CommentsComponent,
    DistanceInCNPipe
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
    HighlightComponent,
    SearchResultTypePipe,
    NavBackComponent,
    ColorfulTagsComponent,
    CommentsComponent,
    DistanceInCNPipe
  ]
})

export class SharedModule { }
