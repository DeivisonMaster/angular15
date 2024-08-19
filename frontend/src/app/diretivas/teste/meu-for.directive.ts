import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[meuFor]'
})
export class MeuForDirective implements OnInit {

  @Input('meuForEm') numeros: number[] = []
  @Input('meuForUsando') texto: string = ''

  constructor() { }

  ngOnInit(): void {
      console.log(this.numeros);
      console.log(this.texto);
  }
}
