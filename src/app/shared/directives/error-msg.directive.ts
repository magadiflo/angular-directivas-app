import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _texto: string = 'Mensaje dentro de la directiva por defecto';
  private _color: string = 'blue';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set mensaje(valor: string) {
    this._texto = valor;
    this.htmlElement.nativeElement.innerText = valor;
  }

  @Input() set color(valor: string) { //* Recibimos el color con el input (de afuera) y se le pasa al parámetro valor, de esta manera evitamos usar el ngOnChanges(...)
    this._color = valor;
    this.htmlElement.nativeElement.style.color = valor;
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setClass();
    this.htmlElement.nativeElement.innerHTML = this._texto;
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
