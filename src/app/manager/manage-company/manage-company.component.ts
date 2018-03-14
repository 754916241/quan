import { Component, OnInit } from '@angular/core';
import {JobMngService} from '../../recruit/job-mng/service/job-mng.service';
import {JobBean} from '../../recruit/job-mng/model/JobBean';
import {ActivatedRoute, Router} from '@angular/router';
import {CompanyBean} from '../../recruit/user-mng/model/CompanyBean';
import {CompanyService} from '../../recruit/user-mng/service/company.service';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.scss']
})
export class ManageCompanyComponent implements OnInit {

  public companyList: Array<CompanyBean>;
  public company: CompanyBean = new CompanyBean();
  public refuseReason: string;

  /**
   * 用于分页
   * @type {number}
   */
  public itemsPerPage: number=10;
  public totalRecords: number;
  public currentPage: number=1;
  public offset: number=0;
  public end: number=0;

  constructor(
    public companyService: CompanyService,
    public router: Router,
    public activeRoute: ActivatedRoute,
  ) {
    this.getCompanyData();
  }

  ngOnInit() {
  }

  public getCompanyData(){

    this.offset = (this.currentPage-1)*this.itemsPerPage;
    this.end = (this.currentPage)*this.itemsPerPage;
    return this.companyService.getAllCompany().subscribe(
      res => {
        this.totalRecords = res['companyData'].length;
        this.companyList = res['companyData'].slice(this.offset,this.end>this.totalRecords?this.totalRecords:this.end);
        //console.log(this.cvList);
      },
      error => {
        console.log(error);
      }
    );
  }

  public setCompanyBean(company: CompanyBean){
    this.company = company;
  }

  public pageChanged(event:any):void {
    let temp=parseInt(event.page)+1;
    this.router.navigateByUrl("manager/manageCompany/"+temp);
  }

  public changeCompanyStatus(companyId: number, status: string){
    this.companyService.changeCompanyStatus(companyId, status, this.refuseReason).subscribe(
      res => {
        console.log(res);
      },
      error => {

      }
    );
  }

}
