import {Component, forwardRef, Host, Inject, Input, OnInit} from '@angular/core';
import {CompanyBean} from '../model/CompanyBean';
import {ActivatedRoute} from '@angular/router';
import {CompanyService} from '../service/company.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileUploader} from 'ng2-file-upload';
import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  public companyList: Array<CompanyBean>;
  public isShowError = false;
  public isShowRight = false;
  public companyBean: CompanyBean;
  public companyGroup: FormGroup;
  public errorMessage: string;
  public rightMessage: string;
  private modalRef: NgbModalRef;

  constructor(
    public companyService: CompanyService,
    public formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {
    this.getCompanyData();
    this.companyGroup = this.formBuilder.group({
      id: [],
      companyShortName: [],
      companyURL: [],
      companyAddress: [],
      companyField: [],
      companyScale: [],
      companyShortIntroduction: [],
      companyIntroduction: []
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
          id: this.companyBean.id,
          companyShortName: this.companyBean.companyShortName,
          companyAddress: this.companyBean.companyAddress,
          companyURL: this.companyBean.companyURL,
          companyField: this.companyBean.companyField,
          companyScale: this.companyBean.companyScale,
          companyShortIntroduction: this.companyBean.companyShortIntroduction,
          companyIntroduction: this.companyBean.companyIntroduction
        });
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

  changeCompany(){
    this.isShowError = !this.companyGroup.valid;

    if(this.companyGroup.valid){
      this.companyService.changeCompany(this.companyGroup.value).subscribe(
        res => {
          this.isShowRight = true;
          this.rightMessage = '修改成功！';
          this.getCompanyData();
          setInterval( () => {
            this.modalRef.close();
          }, 1500);

        },
        error => {
          this.isShowError = true;
          this.errorMessage = '发送请求失败，请稍后重试';
        }
      );
    }
    else
      this.errorMessage = '红色框中内容为必填！请填写完整';
  }

  selectFile(){
    this.companyService.uploadImage();
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
