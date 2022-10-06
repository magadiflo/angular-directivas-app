import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  color: string = 'red';
  texto: string = 'Texto por defecto desde el componente Agregar';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) { }

  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarColor(): void {
    this.color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));    
  }

  cambiarNombre(): void {
    this.texto = Math.random().toString();
  }

}
