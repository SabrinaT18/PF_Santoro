import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosService } from 'src/app/feature/servicios/cursos.service';
import { AbmCursosComponent } from './editar-cursos/abm-cursos.component';
import { CursosComponent } from './cursos.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { FeatureModule } from '../../feature.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { AdminGuard } from 'src/app/core/admin.guard';


@NgModule({
  declarations: [
    CursosComponent,
    AbmCursosComponent,
    NuevoCursoComponent,
    ListaCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FeatureModule,
    SharedModule,
    MaterialModule,
  ],

  providers: [
    CursosService,
    SharedModule,
    AdminGuard
  ]
})
export class CursosModule { }