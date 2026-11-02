import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ApuestasComponent } from './components/apuestas-component/apuestas-component';
import { DeleteComponent } from './components/delete-component/delete-component';
import { CreateComponent } from './components/create-component/create-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { JugadoresComponent } from './components/jugadores-component/jugadores-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "apuestas", component: ApuestasComponent },
  { path: "delete", component: DeleteComponent },
  { path: "crear", component: CreateComponent },
  { path: "equipos/:id", component: EquipoComponent },
  { path: "jugadores/:id", component: JugadoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
