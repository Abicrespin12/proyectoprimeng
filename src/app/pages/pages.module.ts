import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { HistoriaComponent } from './historia/historia.component';
import { MarcasComponent } from './marcas/marcas.component';
import { InformacionComponent } from './informacion/informacion.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    InicioComponent,
    HistoriaComponent,
    MarcasComponent,
    InformacionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    InicioComponent,
    HistoriaComponent,
    MarcasComponent,
    InformacionComponent
  ]
})
export class PagesModule { }
