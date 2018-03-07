import {Component, forwardRef, Host, Inject, Input, OnInit} from '@angular/core';
import {CompanyBean} from '../model/CompanyBean';
import {ActivatedRoute} from '@angular/router';
import {CompanyService} from '../service/company.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  public companyList: Array<CompanyBean>;
  public isShowError = false;
  public companyBean: CompanyBean;
  public companyGroup: FormGroup;
  public errorMessage: string;

  constructor(
    public companyService: CompanyService,
    public formBuilder: FormBuilder
  ) {
    this.getCompanyData();
    this.companyGroup = this.formBuilder.group({
      id: [],
      companyShortName: [],
      companyURL: [],
      companyAddress: [],
      companyField: [],
      companyScale: [],
      companyShortIntroduction: []
    });
  }

  ngOnInit() {

  }

  /**
   * 获取公司信息
   */
  public getCompanyData() {
    return this.companyService.getCompany().subscribe(
      res => {
        this.companyList = res['companyData'];
        this.companyBean = this.companyList[0];
        this.companyGroup.patchValue({
          id: [this.companyBean.id],
          companyShortName: [this.companyBean.companyShortName],
          companyAddress: [this.companyBean.companyAddress],
          companyURL: [this.companyBean.companyURL],
          companyField: [this.companyBean.companyField],
          companyScale: [this.companyBean.companyScale],
          companyShortIntroduction: [this.companyBean.companyShortIntroduction]
        });
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

  changeCompany(){
    this.companyService.changeCompany(this.companyGroup.value).subscribe(
      res => console.log('修改成功'),
      error => console.log('发送请求失败')
    );
  }
}
