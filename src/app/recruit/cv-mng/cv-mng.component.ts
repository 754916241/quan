import { Component, OnInit } from '@angular/core';
import {CVBean} from './model/CVBean';
import { CvMngService } from './service/cv-mng.service';
import {ActivatedRoute, Router} from '@angular/router';
import {attributeType} from "@angular/language-service/src/html_info";
import * as $ from 'jquery';
import {error} from 'util';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InterviewBean} from './model/InterviewBean';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cv-mng',
  templateUrl: './cv-mng.component.html',
  styleUrls: ['./cv-mng.component.scss']
})
export class CvMngComponent implements OnInit {

  public isActive: Array<boolean> = [true, false, false, false];
  public cvList: Array<CVBean>;
  public cvBean: CVBean;
  public interViewGroup: FormGroup;
  public isShowError:boolean = false;
  public title: string;
  public errorMessage: string;
  private modalRef: NgbModalRef;

  /**
   * 用于分页
   * @type {number}
   */
  public itemsPerPage:number=5;
  public totalRecords:number;
  public currentPage:number=1;
  public offset:number=0;
  public end:number=0;


  /**
   * 日历中文化
   */
  public ch = {
    /** 每周第一天，0代表周日 */
    firstDayOfWeek: 0,
    /** 每周天数正常样式 */
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    /** 每周天数短样式（位置较小时显示） */
    dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    /** 每周天数最小样式 */
    dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
    /** 每月月份正常样式 */
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    /**每月月份短样式 */
    monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
  };

  constructor(
    public cvMngService: CvMngService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {
    this.cvBean = new CVBean();
    this.interViewGroup = this.formBuilder.group({
      id: [this.cvBean.id],
      name: [this.cvBean.empName],
      title: ['关于'+this.cvBean.empJob+'职位的面试通知'],
      time: [new Date()],
      address: [],
      contactPeople: [],
      phone: ['',Validators.pattern("^1[3|4|5|7|8][0-9]{9}$")],
      addition: ['请填写补充内容'],
    });
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

  public setCVBean(cvBean: CVBean, content): void{
    this.cvBean = cvBean;
    //点击之后重新赋值
    this.interViewGroup.patchValue({id: cvBean.id, name: cvBean.empName, title: '关于'+cvBean.empJob+'职位的面试通知'});
    //this.open(content);
  }

  /**
   * 改变简历状态
   * @param {number} id
   * @param {number} status
   * @param {number} position 当前简历在列表中的位置，用于移除改变状态的简历
   */
  public changeCVStatus(id: number, status: number, position: number){
    this.cvMngService.changeCVStatus(id, status).subscribe(
      res => {
        if(res['status'] == 200){
          this.cvList.splice(position, 1);
        }else{
          alert('后台服务器错误请重试');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  /**
   * 发送面试通知
   */
  public notifyInterview(){
    this.isShowError = !this.interViewGroup.valid;
    console.log(this.interViewGroup.value);
    if(this.interViewGroup.valid)
      this.cvMngService.notifyInterview(this.interViewGroup.value)
        .subscribe(
          res => {
            console.log(res)
          },
          error => console.log(error)
        );
    else
      /**
       * 判断日薪大小关系,若通过则说明错误为没有填写完整需求信息
       * @type {string | string}
       */
      this.errorMessage = this.interViewGroup.get('phone').valid
        ? '红色框中内容为必填！请填写完整' : '请输入正确的手机号';
  }

  /**
   * 弹出框变量及其操作
   */
  closeResult: string;

  open(content) {
    this.modalRef = this.modalService.open(content, {size: 'lg'});
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
