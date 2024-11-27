import { Component } from '@angular/core';
import { ProjectAnimationsDirective } from '../../directives/project-animations.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectAnimationsDirective
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
