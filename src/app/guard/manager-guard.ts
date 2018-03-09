

import {CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {UserService} from "../user/service/UserService";

export class MessagerGuard implements CanActivate {

  constructor(
    private router: Router,
    public userService: UserService) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    let isPass: boolean = false;
    this.userService.validateManager().subscribe(
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
