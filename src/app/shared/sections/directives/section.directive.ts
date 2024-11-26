import { AfterContentInit, Directive, Input, input } from '@angular/core';
import { SectionModel } from '../models/section.model';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CurrentActiveDirective } from '../../header';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appSection]',
  standalone: true
})
export class SectionDirective extends CurrentActiveDirective implements AfterContentInit {

  @Input() appSection!: SectionModel;

  ngAfterContentInit(): void {
    const sectionId = this.appSection.id;
    const isScrollTriggerEnabled = this.appSection.scrollTrigger;

    if (!isScrollTriggerEnabled) {
      gsap.fromTo(`#${sectionId}`, {
        opacity: 0
      }, {
        opacity: 1,
        ease: 'power2.inOut',
        duration: 1
      });
    } else {
      gsap.fromTo(`#${sectionId}`, {
        opacity: 0
      }, {
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: `#${sectionId}`,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none none"
        }
      });
    }

    ScrollTrigger.create({
      trigger: `#${sectionId}`,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        this.currentOnView(sectionId);
      },
      onEnterBack: () => {
        this.currentOnView(sectionId);
      }
    })
  }

}
