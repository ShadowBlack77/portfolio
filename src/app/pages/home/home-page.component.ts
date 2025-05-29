import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, signal, WritableSignal } from "@angular/core";
import { AboutComponent, ContactComponent, ExperienceComponent, FooterComponent, HeaderComponent, ProjectsComponent } from "@lib/shared/components";
import { InViewportDirective } from "@lib/shared/directives";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    InViewportDirective
  ],
  animations: [
    trigger('fade-in-about', [
      state('hidden', style({
        opacity: 0
      })),
      state('show', style({
        opacity: 1
      })),
      transition('hidden => show', animate(
        '.5s ease-in-out'
      ))
    ]),
    trigger('fade-in-experience', [
      state('hidden', style({
        opacity: 0
      })),
      state('show', style({
        opacity: 1
      })),
      transition('hidden => show', animate(
        '.5s .25s ease-in-out'
      ))
    ]),
    trigger('fade-in-projects', [
      state('hidden', style({
        opacity: 0
      })),
      state('show', style({
        opacity: 1
      })),
      transition('hidden => show', animate(
        '.5s .25s ease-in-out'
      ))
    ]),
    trigger('fade-in-contact', [
      state('hidden', style({
        opacity: 0
      })),
      state('show', style({
        opacity: 1
      })),
      transition('hidden => show', animate(
        '.5s .25s ease-in-out'
      ))
    ])
  ]
})
export class  HomePageComponent {

  readonly currentSection: WritableSignal<string> = signal('about');

  protected readonly aboutState: WritableSignal<string> = signal('hidden');
  protected readonly experienceState: WritableSignal<string> = signal('hidden');
  protected readonly projectsState: WritableSignal<string> = signal('hidden');
  protected readonly contactState: WritableSignal<string> = signal('hidden');

  sectionInViewport(section: string): void {
    this.currentSection.set(section);

    switch(section) {
      case 'about': {
        this.aboutState.set('show');

        break;
      };
      case 'experience': {
        this.experienceState.set('show');

        break;
      };
      case 'projects': {
        this.projectsState.set('show');

        break;
      };
      case 'contact': {
        this.contactState.set('show');

        break;
      }
    }
  }
}