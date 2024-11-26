import { Component } from '@angular/core';
import { CurrentActiveDirective } from '@shared';
import { AsideDirective } from '../../directives/aside.directive';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    CurrentActiveDirective,
    AsideDirective
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {

}
