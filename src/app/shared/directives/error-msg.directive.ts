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
    this.setTexto();
  }

  @Input() set color(valor: string) { //* Recibimos el color con el input (de afuera) y se le pasa al parámetro valor, de esta manera evitamos usar el ngOnChanges(...)
    this._color = valor;
    this.setColor();
  }

  @Input() set valido(valor: boolean) {
    valor ? this.htmlElement.nativeElement.classList.remove('hidden') : this.htmlElement.nativeElement.classList.add('hidden');
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setTexto();
    this.setClase();
  }

  setTexto(): void {
    this.htmlElement.nativeElement.innerHTML = this._texto;
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }
  setClase(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
