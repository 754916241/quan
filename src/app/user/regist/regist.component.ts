import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/UserService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent implements OnInit {

  public isShowError: boolean;
  public errorMessage: string;
  public registForm: FormGroup;
  public isShowRight = false;

  constructor(
    public userService: UserService,
    private formBuilder: FormBuilder,
    public router: Router,
  ) {
    this.isShowError = false;
    this.errorMessage = '红色框中内容为必填！请填写完整';
    this.registForm = formBuilder.group({
      username: ['', Validators.email],
      password: ['', Validators.minLength(6)],
      companyName: [],
      companyField: [],
      companyScale: [],
      companyURL: [],
      companyCity: [],
      companyPhone: ['', Validators.pattern("^1[3|4|5|7|8][0-9]{9}$")],
      companyShortIntroduction: [],
      companyIntroduction: []
    }, {validator: [Validators.required]});
  }

  ngOnInit() {
  }

  onSubmit() {
    this.isShowError = !this.registForm.valid;
    // console.log(this.formGroup.value);
    if (this.registForm.valid)
      this.userService.regist(this.registForm.value)
        .subscribe(res => {
            this.isShowRight = true;
            setInterval( () => {
              this.router.navigateByUrl('user/login');
            }, 2000);
            console.log(res);
        },
          error => console.log(error));
    else
      /**
       * 判断错误原因
       * @type {string | string}
       */
      if (!this.registForm.get('password').valid){
        this.errorMessage = '密码必须大于6位！';
      } else if (!this.registForm.get('username').valid){
        this.errorMessage = '请使用企业邮箱号进行注册！';
      } else if(!this.registForm.get('companyPhone').valid){
        this.errorMessage = '请填入正确的手机号！';
      } else{
        this.errorMessage = '红色框中内容为必填！请填写完整' ;
      }

  }
}
