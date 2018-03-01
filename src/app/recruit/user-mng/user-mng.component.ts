import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-mng',
  templateUrl: './user-mng.component.html',
  styleUrls: ['./user-mng.component.scss']
})
export class UserMngComponent implements OnInit {

  private isActive: Array<boolean> = [true, false];
  constructor() { }

  ngOnInit() {
  }

  private changeLinkColor(position: number) {
    for(let i = 0; i < 2; i++)
      this.isActive[i] = false;
    this.isActive[position] = true;
  }

}
