import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempHttpService {

  constructor(private http: HttpClient) { }

  login(params) {
    return of({userId: 1, userName: '孔夫子的猫', avatar: ''});
  }

  search(params): Observable<any> {
    return this.http
      .get('../../../assets/search-result.json', {params});
  }

  getCode(id): Observable<any> {
    return this.http
      .get(`../../../assets/_code.json`);
  }


  comment(data) {
    return of({code: 200});
  }
}
