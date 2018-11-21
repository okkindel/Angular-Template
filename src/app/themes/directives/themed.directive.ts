import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAddTheme]'
})

export class ThemedDirective {
  constructor(renderer: Renderer, el: ElementRef) {
    renderer.setElementClass(el.nativeElement, 'mat-app-background', true);
  }
}
