import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {JobPublishBean} from '../../job-publish/model/job-publish';
import {CompanyBean} from '../model/CompanyBean';

@Injectable()
export class CompanyService {

  public url = 'api/company.json';

  constructor(public http: HttpClient,
  ) { }

  public getCompany(): Observable<any> {
    return this.http.get(this.url);
  }

  public updatePassword(passwordGroup: {}): Observable<any> {
    return this.http.post(this.url, passwordGroup);
  }

  public changeCompany(companyBean: CompanyBean): Observable<any> {
    return this.http.post(this.url + 'changeCompany', companyBean);
  }

}
