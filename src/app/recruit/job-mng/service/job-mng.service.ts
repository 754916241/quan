import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {JobPublishBean} from '../../job-publish/model/job-publish';

@Injectable()
export class JobMngService {

  public url = 'http://localhost:9000/jobController';

  constructor(public http: HttpClient,
  ) { }

  public getJobList(jobStatus: number = 0): Observable<any> {
    return this.http.get(this.url + '/getJob');
  }

  public changeJobStatus(id: number): Observable<boolean> {
    return this.http.post<boolean>(this.url + 'changeJob', [id, 2]);
  }

}
