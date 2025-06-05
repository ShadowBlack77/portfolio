import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'lib-experience',
  templateUrl: './experience.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage
  ]
})
export class ExperienceComponent {}