import { Component, OnInit, inject } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { KnowledgeComponent } from '../knowledge/knowledge.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [ProjectsComponent, KnowledgeComponent, WorkExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor() {}
}
