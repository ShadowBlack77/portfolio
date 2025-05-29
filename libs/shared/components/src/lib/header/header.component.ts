import { Component, input, InputSignal, OnDestroy, signal, WritableSignal } from "@angular/core";
import { toObservable } from '@angular/core/rxjs-interop';
import { CommonModule } from "@angular/common";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class HeaderComponent implements OnDestroy {

  private readonly _destroy$: Subject<void> = new Subject<void>();

  protected readonly isMenuOpen: WritableSignal<boolean> = signal(false);
  protected readonly currentSection: WritableSignal<string> = signal('about');

  readonly sectionInViewport: InputSignal<string> = input.required();

  constructor() {
    toObservable(this.sectionInViewport).pipe(
      takeUntil(this._destroy$)
    ).subscribe({
      next: (section: string) => {
        this.currentSection.set(section);
      }
    })
  }

  toggleMenu(): void {
    this.isMenuOpen.update((prev) => !prev);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}