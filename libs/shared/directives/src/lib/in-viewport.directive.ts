import { Directive, ElementRef, inject, OnDestroy, OnInit, output, OutputEmitterRef } from "@angular/core";

@Directive({
  selector: '[appInViewport]',
  standalone: true
})
export class InViewportDirective implements OnInit, OnDestroy {

  readonly appInViewport: OutputEmitterRef<void> = output();

  private _observer$: IntersectionObserver | null = null;
  private readonly _elementRef: ElementRef = inject(ElementRef);

  ngOnInit(): void {
    this._observer$ = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.appInViewport.emit();
        }
      },
      {
        threshold: 0.1
      }
    );

    this._observer$.observe(this._elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this._observer$) {
      this._observer$.disconnect();
      this._observer$ = null;
    }
  }
}