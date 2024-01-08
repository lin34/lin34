import { Component, inject } from '@angular/core';
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
export class ProjectComponent {
  project: ProjectType | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  ps = inject(ProjectService);
  projectExists: boolean = false;

  constructor() {
    const projectId = String(this.route.snapshot.params['id']);
    this.project = this.ps.getProjectById(projectId);
    if (this.project == undefined) {
      this.projectExists = false;
    } else {
      this.projectExists = true;
    }
  }
}
