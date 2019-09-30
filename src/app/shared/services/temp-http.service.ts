import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempHttpService {

  constructor(private http: HttpClient) { }

  search(params): Observable<any> {
    return this.http
      .get('../../../assets/search-result.json', {params});
  }
}
