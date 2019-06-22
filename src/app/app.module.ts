import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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




import {HttpClientModule} from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
