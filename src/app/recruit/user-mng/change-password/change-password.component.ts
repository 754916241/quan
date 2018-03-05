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
    }, {validator: [this.equalsValidator, Validators.required]});
  }

  ngOnInit() {
  }

  onSubmit() {
    this.isShowError = !this.formGroup.valid;
    if (this.formGroup.valid)
      this.companyService.updatePassword(this.formGroup.get('newPassword').value)
        .subscribe(job => console.log(job),
          error => console.log(error));
    else
      /**
       * 判断是否有未填项,若有则显示必填错误，否则显示密码不一样错误
       * @type {string | string}
       */
      this.errorMessage = this.formGroup.hasError('equals')
        ? '两次密码不一致！' : '红色框中内容为必填！请填写完整';
  }

  equalsValidator(group: FormGroup): any{
    return group.get('newPassword').value ===
           group.get('cofirmPassword').value ? null : {equals: true};
  }

}
