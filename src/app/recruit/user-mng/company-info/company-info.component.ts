import {Component, Input, OnInit} from '@angular/core';
import {CompanyBean} from "../model/CompanyBean";


@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
  @Input()
  public company: CompanyBean;
  constructor() { }

  ngOnInit() {
    console.log(this.company);
  }
}
