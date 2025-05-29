import { Component, signal, WritableSignal } from "@angular/core";

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  standalone: true
})
export class FooterComponent {

  protected readonly currentYear: WritableSignal<number> = signal(new Date().getFullYear());
}