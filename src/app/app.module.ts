import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { ImageComponent } from './components/image/image.component';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MiembroComponent } from './components/miembro/miembro.component';
import { SlideComponent } from './components/slide/slide.component';
import { NavColegComponent } from './components/nav-coleg/nav-coleg.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { EscribanosComponent } from './components/escribanos/escribanos.component';
import { ContentsComponent } from './components/contents/contents.component';
import {DataTableModule} from 'angular-6-datatable';


import { LoginService } from './services/login.service';

import {HttpClientModule} from '@angular/common/http';
import { AltaEscribaniaComponent } from './components/alta-escribania/alta-escribania.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { ModificarPerfilComponent } from './components/modificar-perfil/modificar-perfil.component';
import { EscribaniasComponent } from './components/escribanias/escribanias.component';
import { AltaPagosComponent } from './components/alta-pagos/alta-pagos.component';
import {AlifeFileToBase64Module} from 'alife-file-to-base64'
import { AgmCoreModule } from '@agm/core';
import { from } from 'rxjs';
import { UsuarioPipe } from './pipes/usuario.pipe';
import { EscribanoPipe } from './pipes/escribano.pipe';
import { PagosPipe } from './pipes/pagos.pipe';
import { EscribaniaPipe } from './pipes/escribania.pipe';
import { NovedadesPipe } from './pipes/novedades.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ImageComponent,
    MiembrosComponent,
    RegistroComponent,
    AboutComponent,
    HomeComponent,
    RegistroComponent,
    MiembroComponent,
    SlideComponent,
    NavColegComponent,
    LoginUserComponent,
    PagosComponent,
    EscribanosComponent,
    ContentsComponent,
    AltaEscribaniaComponent,
    NovedadesComponent,
    ModificarPerfilComponent,
    EscribaniasComponent,
    AltaPagosComponent,
    UsuarioPipe,
    EscribanoPipe,
    PagosPipe,
    EscribaniaPipe,
    NovedadesPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTableModule,
    AlifeFileToBase64Module,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAeCoYNOs5mOnN6e1m0LaggF7hxh9NzEDs'
    })
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
