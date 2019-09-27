import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { ResultItemComponent } from './result-item/result-item.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [SearchComponent, ResultItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
