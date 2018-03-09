import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../user/service/UserService';

@Injectable()
export class AuthGuard implements CanActivate {

  	constructor(
  		private router: Router,
  		public userService: UserService) {

  	}

  	canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {

      this.userService.validateLogin().subscribe(
        res => {
          if(res['status'] == 200)
            return true;
          else
            return false;
        },
        error => {
          error => console.error(error);
          return false;
        }
      );
    	return true;
  	}
}
