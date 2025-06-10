import { NgOptimizedImage } from "@angular/common";
import { Component, Signal, signal } from "@angular/core";

@Component({
  selector: 'lib-technologies',
  templateUrl: './technologies.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage
  ]
})
export class TechnologiesComponent {

  protected readonly technologies: Signal<{ imageUrl: string; title: string; }[]> = signal([
    {
      imageUrl: 'https://www.svgrepo.com/show/452156/angular.svg',
      title: 'Angular'
    },
    {
      imageUrl: 'https://www.svgrepo.com/show/373872/nestjs.svg',
      title: 'NestJS'
    },
    {
      imageUrl: 'https://www.svgrepo.com/show/354119/nodejs-icon.svg',
      title: 'NodeJS'
    },
    {
      imageUrl: 'https://www.svgrepo.com/show/378796/electron.svg',
      title: 'Electron'
    },
    {
      imageUrl: 'https://www.svgrepo.com/show/373604/flutter.svg',
      title: 'Flutter'
    },
    {
      imageUrl: 'https://www.svgrepo.com/show/353498/bootstrap.svg',
      title: 'Bootstrap'
    },
    {
      imageUrl: 'https://www.svgrepo.com/show/353925/javascript.svg',
      title: 'JavaScript'
    },
    {
      imageUrl: 'https://www.svgrepo.com/show/354478/typescript-icon.svg',
      title: 'TypeScript'
    },
    {
      imageUrl: 'https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg',
      title: 'C#'
    },
    {
      imageUrl: 'https://www.svgrepo.com/show/354200/postgresql.svg',
      title: 'PostgreSQL'
    },
    {
      imageUrl: 'https://www.svgrepo.com/show/373595/firebase.svg',
      title: 'Firebase'
    },
    {
      imageUrl: 'https://www.vectorlogo.zone/logos/dotnet/dotnet-official.svg',
      title: '.NET'
    }
  ]);
}