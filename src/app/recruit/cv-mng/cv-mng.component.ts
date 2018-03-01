import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-mng',
  templateUrl: './cv-mng.component.html',
  styleUrls: ['./cv-mng.component.scss']
})
export class CvMngComponent implements OnInit {

  private isActive: Array<boolean> = [true, false, false, false];

  constructor() { }

  ngOnInit() {
  }

  private getCVData(position: number): void {
    this.changeLinkColor(position);
  }

  private changeLinkColor(position: number) {
    for(let i = 0; i<4; i++)
      this.isActive[i] = false;
    this.isActive[position] = true;
  }

}
