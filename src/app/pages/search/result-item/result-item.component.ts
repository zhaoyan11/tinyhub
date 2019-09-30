import { Component, Input, OnInit } from '@angular/core';
import { SearchResultItem } from '../model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {
  @Input() data: SearchResultItem;

  constructor() { }

  ngOnInit() {
  }

}
