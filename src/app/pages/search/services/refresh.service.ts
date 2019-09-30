import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  constructor(private router: Router) { }

  refresh(queryParams, update?): void {
    let params = JSON.parse(JSON.stringify(queryParams));
    params = Object.assign(params, update);
    this.router.navigate(['search'], {queryParams: params});
  }
}
