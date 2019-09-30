import { Component, OnInit } from '@angular/core';
import { SearchResultItem } from '../model';
import { TempHttpService } from '../../../shared/services/temp-http.service';
import { ActivatedRoute } from '@angular/router';
import { RefreshService } from '../services/refresh.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public loading = false;
  public pageSize = 15;
  public searchResults: Array<SearchResultItem>;
  public queryParams: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tempHttp: TempHttpService,
    private rs: RefreshService
  ) { }


  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(
        queryParams => {
          this.queryParams = JSON.parse(JSON.stringify(queryParams));
          this.queryParams.page = queryParams.page || 1;
          this.getData(queryParams);
        }
      );
  }

  getData(params): void {
    this.loading = true;
    this.tempHttp.search(Object.assign({pageSize: this.pageSize}, params)).subscribe(res => {
      this.loading = false;
      this.searchResults = res;
    });
  }

}
