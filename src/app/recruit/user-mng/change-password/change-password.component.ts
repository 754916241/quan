import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JobPublishService} from '../../job-publish/service/job-publish.service';
import {CompanyService} from '../service/company.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  public isShowError: boolean;
  public errorMessage: string;
  public formGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public companyService: CompanyService
  ) {
    this.isShowError = false;
    this.errorMessage = '红色框中内容为必填！请填写完整';
    this.formGroup = formBuilder.group({
      oldPassword: [],
      newPassword: [],
      cofirmPassword: [],
    }, {required: Validators.required,
              isEquals: this.equalsValidator});
  }

  ngOnInit() {
  }

  onSubmit(){
    this.isShowError = !this.formGroup.valid;
    if(this.formGroup.valid)
      this.companyService.updatePassword(this.formGroup.get('newPassword').value)
        .subscribe(job => console.log(job),
          error => console.log(error));
    else
      /**
       * 判断日薪大小关系,若通过则说明错误为没有填写完整需求信息
       * @type {string | string}
       */
      this.errorMessage = this.formGroup.get('jobSalary').valid
        ? '红色框中内容为必填！请填写完整' : '最高日薪必须大于最低日薪！';
  }

  equalsValidator(group: FormGroup): any{
    return group.get('newPassword').value ===
           group.get('cofirmPassword').value ? null : {equals: true};
  }

}
