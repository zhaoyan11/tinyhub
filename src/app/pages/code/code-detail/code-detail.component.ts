import { Component, OnInit } from '@angular/core';
import { TempHttpService } from '../../../shared/services/temp-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-code-detail',
  templateUrl: './code-detail.component.html',
  styleUrls: ['./code-detail.component.css']
})
export class CodeDetailComponent implements OnInit {
  resData: any;
  constructor(
    private tempHttp: TempHttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.tempHttp.getCode(id).subscribe( res => {
      this.resData = res;
    });
  }

}
