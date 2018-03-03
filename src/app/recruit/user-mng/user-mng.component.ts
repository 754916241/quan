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
  public  company: CompanyBean;
  constructor(
    public companService: CompanyService
  ) {}

  ngOnInit() {
    //this.getCompanyData(0);
  }

  /**
   * 获取公司信息
   * @param {number} position
   * 点击了哪个位置
   */
  public getCompanyData(position: number){
    this.changeLinkColor(position);
    return this.companService.getCompany().subscribe(
      res => {
        this.company = res;
      },
      error => {
        console.log(error)
      }
    );
  }

  public changeLinkColor(position: number) {
    for(let i = 0; i < 3; i++)
      this.isActive[i] = false;
    this.isActive[position] = true;
  }

}
