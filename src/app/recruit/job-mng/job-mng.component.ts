import { Component, OnInit } from '@angular/core';
import {CVBean} from '../cv-mng/model/CVBean';
import {ActivatedRoute, Router} from '@angular/router';
import {CvMngService} from '../cv-mng/service/cv-mng.service';
import {JobMngService} from './service/job-mng.service';
import {JobBean} from './model/JobBean';

@Component({
  selector: 'app-job-mng',
  templateUrl: './job-mng.component.html',
  styleUrls: ['./job-mng.component.scss']
})
export class JobMngComponent implements OnInit {

  public isActive: Array<boolean> = [true, false, false, false];
  public jobList: Array<JobBean>;
  public job: JobBean = new JobBean();

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
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.currentPage=params.page;
      this.getJobData(0);
    });
  }

  /**
   * 获取发布职位数据
   * @param {number} jobStatus
   * 0:招聘中
   * 1:已下线
   * 2:已过期
   * 3:审核中
   */
  public getJobData(jobStatus: number){
    this.changeLinkColor(jobStatus);
    this.offset = (this.currentPage-1)*this.itemsPerPage;
    this.end = (this.currentPage)*this.itemsPerPage;
    return this.jobMngService.getJobList(jobStatus).subscribe(
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

  public changeJobStatus(id: number){

    return this.jobMngService.changeJobStatus(id).subscribe(
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

  private changeLinkColor(position: number) {
    for(let i = 0; i < 4; i++)
      this.isActive[i] = false;
    this.isActive[position] = true;
  }

  public pageChanged(event:any):void {
    let temp=parseInt(event.page)+1;
    this.router.navigateByUrl("recruit/jobMng/"+temp);
  }

  public setJobBean(job: JobBean){
    this.job = job;
  }

}
