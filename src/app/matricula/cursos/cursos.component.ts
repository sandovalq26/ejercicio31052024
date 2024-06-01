import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursos: Curso[] = [
    { id: '1', nombre: 'html 5', creditos: 4 },
    { id: '2', nombre: 'javascript', creditos: 4 },
    { id: '3', nombre: 'css', creditos: 4 },
    { id: '4', nombre: 'Java', creditos: 5 }
  ];
}
