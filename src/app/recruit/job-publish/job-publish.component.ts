import { Component, OnInit } from '@angular/core';
import {JobPublishBean} from "./model/job-publish";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {JobPublishService} from './service/job-publish.service';

@Component({
  selector: 'app-job-publish',
  templateUrl: './job-publish.component.html',
  styleUrls: ['./job-publish.component.scss']
})
export class JobPublishComponent implements OnInit {

  public jobPublish: JobPublishBean;
  public isShowError: boolean;
  public errorMessage: string;
  public formGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public jobPublishService: JobPublishService) {
    this.isShowError = false;
    this.errorMessage = '红色框中内容为必填！请填写完整';
    this.formGroup = formBuilder.group({
      jobCatagory: ['计算机'],
      jobName: ['苦逼的码农'],
      jobCity: ['珠海'],
      jobPeopleNumber: [10],
      jobInducement: ['有个屁诱惑'],
      jobDescription: ['有个屁描述'],
      jobAddress: ['珠海-xxx-xxx'],
      jobLowSalary: [1000],
      jobHighSalary: [2000],
      jobProperty: ['实习'],
      jobDegree: ['不限'],
      jobExperience: ['不限'],
    }, {validator: [Validators.required, this.compareValidator]});
  }

  ngOnInit() {
  }

  onSubmit() {
    this.isShowError = !this.formGroup.valid;
    // console.log(this.formGroup.value);
    if(this.formGroup.valid)
      this.jobPublishService.submit(this.formGroup.value)
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

  compareValidator(group: FormGroup): any{
    return group.get('jobLowSalary').value <=
    group.get('jobHighSalary').value ? null : {compare: true};
  }
}
