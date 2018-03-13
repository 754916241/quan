import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../service/company.service';

@Component({
  selector: 'app-company-validate',
  templateUrl: './company-validate.component.html',
  styleUrls: ['./company-validate.component.scss']
})
export class CompanyValidateComponent implements OnInit {

  public status: string;

  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    this.getCompanyData();
  }

  private getCompanyData() {
    this.companyService.getCompany().subscribe(
      res => {
        this.status = res['companyData'][0].status;
      }
    );
  }
}
