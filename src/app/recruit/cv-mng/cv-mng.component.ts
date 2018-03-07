import { Component, OnInit } from '@angular/core';
import {CVBean} from './model/CVBean';
import { CvMngService } from './service/cv-mng.service';
import {ActivatedRoute, Router} from '@angular/router';
import {attributeType} from "@angular/language-service/src/html_info";
import * as $ from 'jquery';

@Component({
  selector: 'app-cv-mng',
  templateUrl: './cv-mng.component.html',
  styleUrls: ['./cv-mng.component.scss']
})
export class CvMngComponent implements OnInit {

  public isActive: Array<boolean> = [true, false, false, false];
  public cvList: Array<CVBean>;
  public cvBean: CVBean;

  /**
   * 用于分页
   * @type {number}
   */
  public itemsPerPage:number=5;
  public totalRecords:number;
  public currentPage:number=1;
  public offset:number=0;
  public end:number=0;

  constructor(
    public cvMngService: CvMngService,
    public router: Router,
    public activeRoute: ActivatedRoute,
  ) {
    this.cvBean = new CVBean();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      switch (params.page){
        //代表默认选择第一项(项数从0开始)
        case '100':
          this.currentPage = 1;
          this.getCVData(1);
          break;
        default:
          this.currentPage=params.page;
          this.getCVData(0);
          break;
      }
    });
  }

  /**
   * 获取招聘的简历数据
   * @param {number} cvStatus
   * 0:待处理
   * 1:已通知
   * 2:不合适
   * 3:已录用
   */
  private getCVData(cvStatus: number){
    this.changeLinkColor(cvStatus);
    this.offset = (this.currentPage-1)*this.itemsPerPage;
    this.end = (this.currentPage)*this.itemsPerPage;
    return this.cvMngService.getCVList(cvStatus).subscribe(
      res => {
        this.totalRecords = res['cvData'].length;
        this.cvList = res['cvData'].slice(this.offset,this.end>this.totalRecords?this.totalRecords:this.end);
      },
      error => {
        console.log(error)
      }
    );
  }

  private changeLinkColor(position: number) {
    for (let i = 0; i < 4; i++)
      this.isActive[i] = false;
    this.isActive[position] = true;
  }

  public pageChanged(event:any):void {
    let temp=parseInt(event.page)+1;
    this.router.navigateByUrl("recruit/cvMng/"+temp);
  }

  public setCVBean(cvBean: CVBean): void{
    this.cvBean = cvBean;
  }

  public changeCVStatus(status: number){
    this.cvMngService.changeCVStatus()
  }

}
