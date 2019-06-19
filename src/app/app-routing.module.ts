import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from "./components/index/index.component";
import { MiembrosComponent } from "./components/miembros/miembros.component";
import { ImageComponent } from "./components/image/image.component";
import { RegistroComponent } from "./components/registro/registro.component";

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'miembros', component: MiembrosComponent },
  { path: 'image', component: ImageComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
