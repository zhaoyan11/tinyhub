import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultType } from '../../shared/constants';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public ResultType = ResultType;
  public queryParams: any = { type: this.ResultType[0].symbol, page: 1, keyWords: '' };
  public resultCount = 0;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(
      queryParams => {
        console.log(queryParams);
      }
    );
  }


  search(params): void {
    Object.assign(this.queryParams, params);
    this.router.navigate(['search'], {queryParams: this.queryParams});
  }

  addCode(): void {

  }

  addFile(): void {

  }
}
