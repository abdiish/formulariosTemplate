import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({

  //   nombre     : new FormControl('RTX 4080ti'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(5)

  // })

  miFormulario: FormGroup = this.fb.group({

    //Orden: [valor del input, validador sincrono, validador asincrono]
    // Si es mas de un vañidador, se coloca un arraglo de validadores

    nombre     : [, [Validators.required, Validators.minLength(3)]],
    precio     : [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]]

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // Establecer valores a formulario setValue
    // this.miFormulario.setValue({
    //   nombre: 'RTX 4080',
    //   precio: 1600,
    //   existencias: 6
    // });

    // Establecer valores a formulario reset
    this.miFormulario.reset({
      nombre: 'RTX 4080',
      precio: 1600,
    });
  }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched
  }


  guardar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();

  }

}
