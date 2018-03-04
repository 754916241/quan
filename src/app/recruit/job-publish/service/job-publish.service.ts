import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class JobPublishService {

  public url = 'api/submitJobPublish.json';

  constructor(public http: HttpClient,
  ) { }

  public getJobList(jobStatus: number = 0): Observable<any> {
    return this.http.get(this.url, {params: new HttpParams().
      set('jobStatus', `${jobStatus}`)});
  }
}
