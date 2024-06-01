import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlantillasModule } from './plantillas/plantillas-module.module';
import { MatriculaModule } from './matricula/matricula-module.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PlantillasModule,
    CommonModule,FormsModule,MatriculaModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cjavademo-app';
}
