import { Component, OnInit } from '@angular/core';
import { ResultType } from '../../shared/constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
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


  search(params?): void {
    Object.assign(this.queryParams, params);
    this.router.navigate(['search'], {queryParams: this.queryParams});
  }

}
