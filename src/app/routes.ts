import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { JobComponent } from './work-experience/job/job.component';

const routeConfig: Routes = [
  {
    path: 'home/',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'project/:id',
    component: ProjectComponent,
  },
  {
    path: 'experience/:id',
    component: JobComponent,
  },
  {
    path: '**',
    component: HomeComponent,
    title: 'Home page',
  },
];

export default routeConfig;
