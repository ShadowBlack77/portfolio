import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CurrentActiveDirective } from '../../directives/current-active.directive';
import { AsideDirective } from '../../../aside';

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    CurrentActiveDirective,
    AsideDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public isMenuOpen: WritableSignal<boolean> = signal(false);
  
}
