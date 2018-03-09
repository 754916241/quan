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
    return this.http.get(this.url + '/getJob', {params: new HttpParams().
      set('jobStatus', `${jobStatus}`)});
  }

  public changeJobStatus(id: number, jobStatus: number): Observable<any> {
    return this.http.post<any>(this.url + '/changeJobStatus', {id: id, jobStatus: jobStatus});
  }

  public deleteJob(id: number): Observable<any> {
    return this.http.post(this.url + '/deleteJobById', id);
  }

  public changeJobVerifyStatus(companyId: number, jobId: number, jobVerifyStatus: string, refuseReason?:string): Observable<any> {
    return this.http.post<any>(this.url + '/changeJobVerifyStatus', {
      companyId: companyId, jobId: jobId, jobVerifyStatus: jobVerifyStatus, refuseReason: refuseReason});
  }

}
