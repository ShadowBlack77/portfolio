import { Component } from '@angular/core';
import { AboutComponent, AsideComponent, ExperienceComponent, FooterComponent, GET_ALL_ELEMENTS_TOKEN, GetAllElements, HeaderComponent, ProjectsComponent, SectionDirective, SectionModel } from '@shared';
import { ContactComponent } from "../../shared/contact/components/contact/contact.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    ExperienceComponent,
    AsideComponent,
    ProjectsComponent,
    SectionDirective,
    ContactComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: [
    {
      provide: GET_ALL_ELEMENTS_TOKEN,
      useClass: GetAllElements
    }
  ]
})
export class MainComponent {

  public sections: Record<string, SectionModel> = {
    about: { id: 'about', scrollTrigger: false },
    experience: { id: 'experience', scrollTrigger: true },
    projects: { id: 'projects', scrollTrigger: true },
    contact: { id: 'contact', scrollTrigger: true }
  }
}
