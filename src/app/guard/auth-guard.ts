import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../user/service/UserService';
import {fakeAsync} from "@angular/core/testing";

@Injectable()
export class LoginGuard implements CanActivate {

  	constructor(
  		private router: Router,
  		public userService: UserService) {
  	}

  	canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {

  	  let isPass: boolean = false;
      this.userService.validateLogin().subscribe(
        res => {
          if(res['status'] == 200)
            isPass = true;
          else
            isPass = true;
        },
        error => {
          console.error(error);
          isPass = true;
        }
      );
    	return true;
  	}
}
