import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {JobPublishComponent} from '../job-publish.component';
import {JobPublishBean} from '../model/job-publish';


@Injectable()
export class JobPublishService {

  public url = 'api/submitJobPublish.json';

  constructor(public http: HttpClient,
  ) { }

  public submit(job: JobPublishBean): Observable<JobPublishBean> {
    /*return this.http.get(this.url, {params: new HttpParams().
      set('jobStatus', `${jobStatus}`)});*/
    return this.http.post<JobPublishBean>(this.url, job);
  }
}
