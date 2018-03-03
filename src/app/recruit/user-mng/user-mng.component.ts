import { Component, OnInit } from '@angular/core';
import {CompanyService} from "./service/company.service";
import {CompanyBean} from "./model/CompanyBean";

@Component({
  selector: 'app-user-mng',
  templateUrl: './user-mng.component.html',
  styleUrls: ['./user-mng.component.scss']
})
export class UserMngComponent implements OnInit {

  public isActive: Array<boolean> = [true, false, false];
  public company: CompanyBean = {
    "id": "5",
    "companyName": "权哥科技（武汉）有限公司",
    "companyAddress": "武昌",
    "companyShortName": "权科",
    "companyField": "互联网",
    "companyScale": "5000",
    "companyURL": "www.quan.com",
    "companyLabel": [],
    "companyIntroduction": "权哥科技成立于2018年11月，是目前中国领先的互联网增值服务提供商之一。",
    "companyImgPath": "http://www.shixiseng.com",
    "status": "0"
  };
  constructor(
    public companService: CompanyService
  ) { }

  ngOnInit() {
  }

  public changeLinkColor(position: number) {
    for(let i = 0; i < 3; i++)
      this.isActive[i] = false;
    this.isActive[position] = true;
  }

}
