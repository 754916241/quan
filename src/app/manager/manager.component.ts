import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  public signout() {
    this.router.navigate(['/user/login']);
  }

}
