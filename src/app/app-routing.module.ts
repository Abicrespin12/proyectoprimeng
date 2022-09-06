import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriaComponent } from './pages/historia/historia.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MarcasComponent } from './pages/marcas/marcas.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: '', component: InicioComponent},
  { path: 'historia', component: HistoriaComponent},
  { path: 'informacion', component: InformacionComponent},
  { path: 'marcas', component: MarcasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
