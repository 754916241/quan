import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../user/service/UserService';
import {fakeAsync} from "@angular/core/testing";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginGuard implements CanActivate {

  	constructor(
  		private router: Router,
  		public userService: UserService) {
  	}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      this.userService.validateLogin().subscribe(
        res => {
          if(!res)
            this.router.navigate(['/user/login']);
        }
      );

      return this.userService.validateLogin();
    }

}
