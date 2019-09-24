import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeRoutingModule } from './code-routing.module';
import { CodeComponent } from './code.component';
import { SharedModule } from '../../shared/shared.module';
import { CodeDetailComponent } from './code-detail/code-detail.component';


@NgModule({
  declarations: [CodeComponent, CodeDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    CodeRoutingModule
  ]
})
export class CodeModule { }
