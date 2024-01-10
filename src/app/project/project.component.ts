import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ProjectType } from '../project_type';
import { ProjectService } from '../project.service';
@Component({
  selector: 'project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  project: ProjectType | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  ps = inject(ProjectService);
  projectExists: boolean = false;

  constructor() {
    const projectId = Number(this.route.snapshot.params['id']);
    this.project = this.ps.getProjectById(projectId);
  }

  ngOnInit() {
    if (this.project == undefined) {
      this.projectExists = false;
    } else {
      this.projectExists = true;
    }
  }
}
