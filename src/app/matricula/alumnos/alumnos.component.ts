import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Alumno } from './alumno';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {
  alumnos: Alumno[] = [
    { id: '1', nombre: 'juan', edad: 25 , telefono : 1232345 },
    { id: '2', nombre: 'beto', edad: 26 , telefono : 1236666 },
    { id: '13', nombre: 'andres', edad: 27 , telefono : 1238888},  ];
}
