import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Alumno } from './alumno';

@Component({
    selector: 'app-alumnosform',
    standalone: true,
    imports: [CommonModule,FormsModule],
    templateUrl: './alumnos.componentForm.html'
  })
export class AlumnosComponentForm{
    modelo = new Alumno("c01","juan",28,1234567);
    enviado = false;

    onSubmit(){
    console.log(this.modelo);
    this.enviado = true;
  }

}
