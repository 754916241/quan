import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CVBean} from '../model/CVBean';
import {URLSearchParams} from '@angular/http';
import {InterviewBean} from '../model/InterviewBean';


@Injectable()
export class CvMngService {

  public url = 'api/cvList.json';

  constructor(public http: HttpClient,
            ) { }

  public getCVList(cvStatus: number = 0): Observable<any>{
    return this.http.get(this.url, {params: new HttpParams().
      set('cvStatus',`${cvStatus}`)});
  }

  public changeCVStatus(id: number, cvStatus: number): Observable<any>{
     return this.http.post(this.url + '/changeCVStatus', {id:id, cvStatus:cvStatus});
  }

  public notifyInterview(interviewBean: InterviewBean): Observable<any>{
    return this.http.post(this.url + '/addInterview', interviewBean);
  }

}
