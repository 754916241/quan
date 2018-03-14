import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class HrCenterService {

  public url = 'api/hrcenter.json';

  constructor(public http: HttpClient,
            ) { }

  public getHRCenterData(): Observable<any> {
    return this.http.get(this.url);
  }
}
