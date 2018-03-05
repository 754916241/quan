import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {JobPublishBean} from '../../job-publish/model/job-publish';

@Injectable()
export class CompanyService {

  public url = 'api/company.json';

  constructor(public http: HttpClient,
  ) { }

  public getCompany(): Observable<any> {
    return this.http.get(this.url);
  }

  public updatePassword(password: string): Observable<string>{
    return this.http.post<string>(this.url, password);
  }

}
