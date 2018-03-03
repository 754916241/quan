import {Component, forwardRef, Host, Inject, Input, OnInit} from '@angular/core';
import {CompanyBean} from '../model/CompanyBean';
import {UserMngComponent} from '../user-mng.component';
import {ActivatedRoute} from '@angular/router';
import {CompanyService} from '../service/company.service';


@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  public companyList: Array<CompanyBean>;
  constructor(
    public companyService: CompanyService
  ) {this.getCompanyData(); }

  ngOnInit() {

  }

  /**
   * 获取公司信息
   */
  public getCompanyData() {
    return this.companyService.getCompany().subscribe(
      res => {
        this.companyList = res['companyData'];
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }
}
