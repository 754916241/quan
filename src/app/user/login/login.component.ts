import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserBean} from '../model/user.model';
import {UserService} from '../service/UserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isShowError: boolean;
  public errorMessage: string;
  public loginForm: FormGroup;
  public userBean: UserBean;

  constructor(
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public userService: UserService,
    public router: Router
  ) {
    this.isShowError = false;
    this.errorMessage = '红色框中内容为必填！请填写完整';
    this.loginForm = formBuilder.group({
      username: [''],
      password: ['',Validators.minLength(6)]
    }, {validator: [Validators.required]});
  }

  ngOnInit() {
  }

  onSubmit(){
    this.isShowError = !this.loginForm.valid;
    //console.log(this.loginForm.value);
    if (this.loginForm.valid)
      this.userService.login(this.loginForm.value)
        .subscribe(res => {
            if(res['status'] == 0){
              if(res['userType'] == 'admin'){
                this.router.navigate(['manager'], {
                  queryParams: {
                    username: this.loginForm.get('username').value
                  }
                });
              }else if(res['userType'] == 'company'){
                this.router.navigate(['recruit'], {
                  queryParams: {
                    username: this.loginForm.get('username').value
                  }
                });
              }

            }else{
              this.isShowError = true;
              this.errorMessage = '用户名或密码错误！';
            }

        },
        error => {
          this.isShowError = true;
          this.errorMessage = '服务器通讯错误，请重试';
        });
    else
      /**
       * 判断密码长度
       * @type {string | string}
       */
      this.errorMessage = this.loginForm.get('password').hasError('minlength')
        ? '密码必须大于6位！' : '红色框中内容为必填！请填写完整' ;
  }

}
