import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from "./components/index/index.component";
import { MiembrosComponent } from "./components/miembros/miembros.component";
import { ImageComponent } from "./components/image/image.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { SlideComponent } from './components/slide/slide.component';
import { MiembroComponent } from './components/miembro/miembro.component';
import { ContentsComponent } from './components/contents/contents.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { EscribanosComponent } from './components/escribanos/escribanos.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'miembros', component: MiembrosComponent },
  { path: 'image', component: ImageComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'slide', component: SlideComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'miembro', component: MiembroComponent },
  { path: 'contents', component: ContentsComponent },
  { path: 'login', component: LoginUserComponent },
  { path: 'pagos', component: PagosComponent },
  { path: 'escribanos', component: EscribanosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'index' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
