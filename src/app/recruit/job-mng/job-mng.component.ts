import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-mng',
  templateUrl: './job-mng.component.html',
  styleUrls: ['./job-mng.component.scss']
})
export class JobMngComponent implements OnInit {

  private isActive: Array<boolean> = [true, false, false, false, false];

  constructor() { }

  ngOnInit() {
  }

  private getJobData(position: number): void {
    this.changeLinkColor(position);
  }

  private changeLinkColor(position: number) {
    for(let i = 0; i < 5; i++)
      this.isActive[i] = false;
    this.isActive[position] = true;
  }

}
