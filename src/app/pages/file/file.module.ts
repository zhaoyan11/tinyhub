import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileRoutingModule } from './file-routing.module';
import { FileComponent } from './file.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [FileComponent],
  imports: [
    CommonModule,
    SharedModule,
    FileRoutingModule
  ]
})
export class FileModule { }
