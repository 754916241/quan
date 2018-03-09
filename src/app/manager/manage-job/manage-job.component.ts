import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JobMngService} from '../../recruit/job-mng/service/job-mng.service';
import {JobBean} from '../../recruit/job-mng/model/JobBean';

@Component({
  selector: 'app-manage-job',
  templateUrl: './manage-job.component.html',
  styleUrls: ['./manage-job.component.scss']
})
export class ManageJobComponent implements OnInit {

  public jobList: Array<JobBean>;
  public job: JobBean = new JobBean();
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
    public jobMngService: JobMngService,
    public router: Router,
    public activeRoute: ActivatedRoute,
  ) {
    this.getJobData();
  }

  ngOnInit() {
  }

  public getJobData(){

    this.offset = (this.currentPage-1)*this.itemsPerPage;
    this.end = (this.currentPage)*this.itemsPerPage;
    return this.jobMngService.getJobList(2).subscribe(
      res => {
        this.totalRecords = res['jobData'].length;
        this.jobList = res['jobData'].slice(this.offset,this.end>this.totalRecords?this.totalRecords:this.end);
        //console.log(this.cvList);
      },
      error => {
        console.log(error);
      }
    );
  }

  public setJobBean(job: JobBean){
    this.job = job;
  }

  public pageChanged(event:any):void {
    let temp=parseInt(event.page)+1;
    this.router.navigateByUrl("manager/manageJob/"+temp);
  }

  public changeJobVerifyStatus(companyId: number, jobId: number, status: string){
    this.jobMngService.changeJobVerifyStatus(companyId, jobId, status, this.refuseReason).subscribe(
      res => {
        console.log(res);
      },
      error => {

      }
    );
  }

}
