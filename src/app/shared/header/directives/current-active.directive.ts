import { Directive, ElementRef, HostListener, Inject, inject, Input, Optional, Renderer2 } from '@angular/core';
import { GetAllElementsModel } from '../strategies/get-all-elements.interface';
import { GET_ALL_ELEMENTS_TOKEN } from '../strategies/get-all-elements.strategy';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

@Directive({
  selector: '[appCurrentActive]',
  standalone: true
})
export class CurrentActiveDirective {

  @Input() appCurrentActive!: string;

  constructor(@Inject(GET_ALL_ELEMENTS_TOKEN) @Optional() private readonly allRoutes: GetAllElementsModel) {}

  private readonly renderer: Renderer2 = inject(Renderer2);
  private readonly elementRef: ElementRef = inject(ElementRef);

  @HostListener('click')
  public clickHandler() {
    if (this.elementRef.nativeElement.classList.contains('nav-link')) {  
      gsap.to(window, {
        duration: 0.1,
        scrollTo: {
          y: `#${this.appCurrentActive}`,
          offsetY: 50
        },
        ease: 'power2.out'
      });
    }
  }


  public currentOnView(section: string) {
    const allRoutes = this.allRoutes.getAllElements('.nav-link');

    allRoutes.forEach((route: any) => {
      route.innerText.toLowerCase() === section ? 
        this.renderer.addClass(route, 'active-header-link') : 
        this.renderer.removeClass(route, 'active-header-link');
    });
  }
}
