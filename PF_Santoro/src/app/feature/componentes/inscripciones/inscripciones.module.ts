import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';

import { InscripcionesService } from 'src/app/feature/servicios/inscripciones.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NuevaInscrComponent } from './nueva-inscr/nueva-inscr.component';
import { AbmInscripComponent } from './editar-inscripciones/abm-inscrip.component';
import { InscripcionesComponent } from './inscripciones.component';
import { FeatureModule } from '../../feature.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { InscripcionesListaComponent } from './inscripciones-lista/inscripciones-lista.component';


@NgModule({

  declarations: [
    InscripcionesComponent,
    AbmInscripComponent,
    NuevaInscrComponent,
    InscripcionesListaComponent
  ],

  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    FeatureModule,
    SharedModule,
    MaterialModule
  ],

  providers: [
    InscripcionesService
  ]

})
export class InscripcionesModule { }