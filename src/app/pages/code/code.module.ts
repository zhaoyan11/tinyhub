import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeRoutingModule } from './code-routing.module';
import { CodeComponent } from './code.component';
import { SharedModule } from '../../shared/shared.module';
import { CodeDetailComponent } from './code-detail/code-detail.component';
import { CodeLangComponent } from './code-lang/code-lang.component';
import { CodeCategoryComponent } from './code-category/code-category.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';


@NgModule({
  declarations: [CodeComponent, CodeDetailComponent, CodeCategoryComponent, CodeLangComponent, CodeEditorComponent],
  imports: [
    CommonModule,
    SharedModule,
    CodeRoutingModule
  ]
})
export class CodeModule { }
