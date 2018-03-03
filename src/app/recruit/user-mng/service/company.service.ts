import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CompanyService {

  public url = 'api/company.json';

  constructor(public http: HttpClient,
  ) { }

  public getJobList(companyStatus: number = 0): Observable<any> {
    return this.http.get(this.url, {params: new HttpParams().
      set('companyStatus', `${companyStatus}`)});
  }

}
