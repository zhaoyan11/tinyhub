import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeRoutingModule } from './code-routing.module';
import { CodeComponent } from './code.component';
import { SharedModule } from '../../shared/shared.module';
import { CodeDetailComponent } from './code-detail/code-detail.component';
import { CodeLangComponent } from './code-lang/code-lang.component';
import { CodeCategoryComponent } from './code-category/code-category.component';


@NgModule({
  declarations: [CodeComponent, CodeDetailComponent, CodeCategoryComponent, CodeLangComponent],
  imports: [
    CommonModule,
    SharedModule,
    CodeRoutingModule
  ]
})
export class CodeModule { }
