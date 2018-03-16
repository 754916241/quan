

import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {UserService} from "../user/service/UserService";
import {Injectable} from '@angular/core';

@Injectable()
export class MessagerGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.userService.validateManager().subscribe(
      res => {
        if (!res) {
          alert("您没有权限访问该页面");
          this.router.navigate(['/user/login']);
        }
      }
    );

    return this.userService.validateManager();
  }

}
