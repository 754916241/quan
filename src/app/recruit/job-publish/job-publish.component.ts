import { Component, OnInit } from '@angular/core';
import {JobPublishBean} from "./model/job-publish";

@Component({
  selector: 'app-job-publish',
  templateUrl: './job-publish.component.html',
  styleUrls: ['./job-publish.component.scss']
})
export class JobPublishComponent implements OnInit {

  public jobPublish: JobPublishBean;

  constructor() { }

  ngOnInit() {
  }

}
