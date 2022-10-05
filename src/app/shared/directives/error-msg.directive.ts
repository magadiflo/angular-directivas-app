import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  @Input() mensaje: string = 'Este campo es necesario';
  @Input() color: string = 'red';
  htmlElement: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setClass();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
