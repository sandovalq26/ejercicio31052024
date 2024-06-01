import { Component } from '@angular/core';
import { Curso } from './curso';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-cursosform',
    standalone: true,
    imports: [CommonModule,FormsModule],
    templateUrl: './cursos.componentForm.html'
  })
export class CursosComponentForm{
    creditos =[0,1,2,3,4,5];
    modelo = new Curso("a01","phyton",this.creditos[3]);
    enviado = false;

    onSubmit(){
    console.log(this.modelo);
    this.enviado = true;
  }

}
