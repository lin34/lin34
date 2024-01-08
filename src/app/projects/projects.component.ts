import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectType } from '../project_type';
import { ProjectService } from '../project.service';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  myProjects: ProjectType[] = [];
  ps: ProjectService = inject(ProjectService);
  constructor() {
    this.myProjects = this.ps.getAllProjects();
  }
}
