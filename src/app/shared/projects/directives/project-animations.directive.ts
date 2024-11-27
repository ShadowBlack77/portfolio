import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appProjectAnimations]',
  standalone: true
})
export class ProjectAnimationsDirective implements AfterViewInit {

  private readonly elementRef: ElementRef = inject(ElementRef);

  public ngAfterViewInit(): void {
    const elementId = this.elementRef.nativeElement.id;

    gsap.fromTo(`#${elementId}`, {
      opacity: 0
    }, {
      opacity: 1,
      ease: 'power2.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: `#${elementId}`,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none"
      }
    });
  }
}
