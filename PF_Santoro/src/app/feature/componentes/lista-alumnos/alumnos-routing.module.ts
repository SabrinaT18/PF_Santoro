import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guard/admin.guard';
import { ABMalumnosComponent } from './editar-alumnos/abmalumnos.component';
import { ListaAlumnosComponent } from './lista-alumnos.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { AlumnosComponent } from './alumnos/alumnos.component';

const routes: Routes = [
  {path: 'alumnos', component: AlumnosComponent, children: [
    {path: 'lista', component: ListaAlumnosComponent   },
    {path: 'nuevo', component: NuevoAlumnoComponent },
    {path: 'edit', component: ABMalumnosComponent, canDeactivate: [AdminGuard] }
  ],
  canActivateChild: [AdminGuard]}
 ];


@NgModule({


    
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
 
