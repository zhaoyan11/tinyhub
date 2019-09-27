import { Component, OnInit } from '@angular/core';
import { ResultType } from '../../shared/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchResultItem } from './model';
import { TempHttpService } from '../../shared/services/temp-http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public ResultType = ResultType;
  public queryParams: any = { type: this.ResultType[0].symbol, page: 1, keyWords: '' };
  public resultCount = 0;
  public searchResults: Array<SearchResultItem>;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tempHttp: TempHttpService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(
        queryParams => {
          this.getData(queryParams);
        }
      );
  }

  search(params?): void {
    Object.assign(this.queryParams, params);
    this.router.navigate(['search'], {queryParams: this.queryParams});
  }

  getData(params): void {
    this.tempHttp.search(params).subscribe(res => {
      this.searchResults = res;
      this.resultCount = res.length;
    });
  }

}
