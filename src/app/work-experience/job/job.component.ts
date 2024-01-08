import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { JobData } from '.././job-data';
@Component({
  selector: 'job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss',
})
export class JobComponent {
  jd: JobData = new JobData();
  job: any;
  jobExists: Boolean = true;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    window.scrollTo(0, 1); //document.body.scrollHeight
    const id = this.route.snapshot.paramMap.get('id');
    this.job = this.jd.getJobFromId(id);
    if (this.job == null) {
      this.jobExists = false; //show project doesnt exist page
    }
  }
}
