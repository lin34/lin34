import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { JobData } from './job-data';
import { JobType } from './job-type';

@Component({
  selector: 'work-experience',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css',
})
export class WorkExperienceComponent {
  jd: JobData = new JobData();
  myJobs: JobType[] = this.jd.myJobs; //pure data class
  constructor() {}
}
