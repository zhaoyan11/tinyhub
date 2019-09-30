import { Component, OnInit } from '@angular/core';
import { ResultType } from '../../shared/constants';
import { RefreshService } from './services/refresh.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public ResultType = ResultType;
  public queryParams: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private rs: RefreshService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(
        queryParams => {
          this.queryParams = Object.assign({
            type: this.ResultType[0].symbol,
            page: 1,
            keyWords: ''
          }, queryParams);
        }
      );
  }

}
