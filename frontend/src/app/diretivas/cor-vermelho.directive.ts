import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCorVermelho]'
})
export class CorVermelhoDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b';
  }

}
