import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserBean} from '../model/user.model';


@Injectable()
export class UserService {

  public url = 'http://localhost:9000/userController/';
  public isPass = false;

  constructor(public http: HttpClient
  ) {}


  public login(userBean: UserBean){
    return this.http.post(this.url + 'login', userBean, {withCredentials: true});
  }

  public regist(registBean: {}) : Observable<any>{
    return this.http.post(this.url + 'regist', registBean);
  }

  public validateLogin() :Observable<boolean>{
    return this.http.get<boolean>(this.url + 'isLogin', {withCredentials: true});
  }

  public validateManager() : Observable<any> {
    return this.http.get(this.url + 'isManager');
  }


}
