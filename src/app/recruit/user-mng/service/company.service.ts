import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {JobPublishBean} from '../../job-publish/model/job-publish';
import {CompanyBean} from '../model/CompanyBean';
import {FileUploader} from 'ng2-file-upload';

@Injectable()
export class CompanyService {

  public url = 'api/company.json/';
  public uploader:FileUploader;
  constructor(public http: HttpClient
  ) {
    this.uploader = new FileUploader({
      url: "http://localhost:9000/companyController/" + "uploadImage",
      method: "POST",
      itemAlias: "file"
    });
  }

  public getAllCompany(): Observable<CompanyBean> {
    return this.http.get<CompanyBean>(this.url);
  }

  public getCompany(): Observable<any> {
    return this.http.get(this.url);
  }

  public updatePassword(passwordGroup: {}): Observable<any> {
    return this.http.post(this.url, passwordGroup);
  }

  public changeCompany(companyBean: CompanyBean): Observable<any> {
    return this.http.post(this.url + 'changeCompany', companyBean);
  }

  public uploadImage(){

    this.uploader.queue[0].onSuccess = (response, status, headers) => {
      // 上传文件成功
      if (status == 200) {
        // 上传文件后获取服务器返回的数据
        // let tempRes = JSON.parse(response);
        console.log(JSON.parse(response));
        console.log(status);
        console.log(headers);
      }else {
        console.log(response);
      }
    };

    this.uploader.queue[0].onError = (response, status, headers) => {
      console.log(response);
      console.log(status);
      console.log(headers);
    };

    this.uploader.queue[0].upload();
  }

  public changeCompanyStatus(id: number, status: string, refuseReason?: string): Observable<any> {
    return this.http.post(this.url, {id: id, status: status, refuseReason: refuseReason});
  }

}
