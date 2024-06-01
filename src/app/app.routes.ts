import { Routes } from '@angular/router';
import { AlumnosComponent } from './matricula/alumnos/alumnos.component';
import { CursosComponent } from './matricula/cursos/cursos.component';
import { CursosComponentForm } from './matricula/cursos/cursos.componentForm';
import { AlumnosComponentForm } from './matricula/alumnos/alumnos.componentForm';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AlumnosComponent },
    { path: 'cursos', component: CursosComponent },
    { path:'alumnos',component:AlumnosComponent},
    { path: 'cursos/cursosForm', component: CursosComponentForm },
    { path: 'alumnos/alumnosForm', component: AlumnosComponentForm },
];
