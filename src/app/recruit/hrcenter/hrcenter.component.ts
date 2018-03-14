import { Component, OnInit } from '@angular/core';
import {HrCenterService} from './service/hr-center.service';

@Component({
  selector: 'app-hrcenter',
  templateUrl: './hrcenter.component.html',
  styleUrls: ['./hrcenter.component.scss']
})
export class HrcenterComponent implements OnInit {

  hrCenterData: {};
  interviewList: Array<any> = [];

  constructor(
    private service: HrCenterService
  ) { }

  ngOnInit() {
  }

  getHRCenterData() {
    this.service.getHRCenterData().subscribe(
      res => {
        if(res[status] == 200){
          this.hrCenterData = res['entity'];
          this.interviewList = this.hrCenterData['interviewRecord'];
        }else{
          console.log('后台服务器查询错误！');
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
