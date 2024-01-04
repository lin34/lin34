import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { JobsComponent } from './jobs/jobs.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'project/:id',
    component: ProjectsComponent,
  },
  {
    path: 'experience/:id',
    component: JobsComponent,
  },
];

export default routeConfig;
