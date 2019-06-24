import { Component, OnInit } from '@angular/core';
import { NovedadesService } from 'src/app/services/novedades.service';
import { Novedades } from 'src/app/models/novedades';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
class ValueAndText {
  constructor(public Value: string, public Text: string) { }
}

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  titleArray: ValueAndText[] = [new ValueAndText("Mister", "Mister-Text"),
  new ValueAndText("Lord", "Lord-Text"),new ValueAndText("Mister", "Mister-Text"),
  new ValueAndText("Mister", "Mister-Text")];

  novedades: Novedades;
  listaNovedades: Array<Novedades>;
  usuario: Usuario;
  usuarioMod: Usuario;
  usuarios: Array<Usuario>;
  novedadesMod: Novedades;

  constructor(private novedadesService: NovedadesService,
    private usuarioService: UsuarioService) {
    this.usuario = new Usuario();
    this.usuarioMod = new Usuario();
    this.usuarios = new Array<Usuario>();
    this.novedades = new Novedades();
    this.novedadesMod = new Novedades();
    this.listaNovedades = new Array<Novedades>();
    this.obtenerNovedades();
    this.obtenerUsuarios();
  }
  
  ngOnInit() {
  }
  public obtenerUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe(
        results => {
          this.usuarios = results['usuarios'];
          console.log(results);
        }
      );

  }
  public obtenerNovedades() {
    this.novedadesService.getsListaNovedades()
      .subscribe(
        results => {
          this.listaNovedades = results.listaNovedades;
          console.log(results.listaNovedades);
        }
      );

  }
  public nuevoNovedades() {
    this.novedades.fecha = new Date;
    this.novedadesService.newNovedades(this.novedades)
      .subscribe(
        result => {
          console.log("agregado correctamente.");
          this.obtenerNovedades();
        },
        error => {
          alert("Error al agregar.");
        });
  }

  public elegirnovedades(novedades: Novedades) {
    //Creo una copia del mensaje recibido como parametro para NO modificarlo
    //ya que el parametro esta mostrandose por el binding en el datatable
    this.novedades = Object.assign(this.novedades, novedades);
    /*  //se asigna a la propiedad mensaje.empresa el correspondiente en el
     //array de empresas, ya que este array es fuente de datos del <select>
     this.usuario.empresa = this.empresas.find(function(item: Empresa) {
     return item.id === mensaje.empresa.id;
     }); */
  }


  public actualizarNovedades() {
    this.novedadesService.modificarNovedades(this.novedades).subscribe(
      data => {
        console.log("modificado correctamente.")
        //actualizo la tabla de mensajes
        this.obtenerNovedades();
        return true;
      },
      error => {
        console.error("Error al modificar!");
        console.log(error);
        return false;
      });
  }

  public bajaNovedades() {
    this.novedadesService.modificarNovedades(this.novedades).subscribe(
      data => {
        console.log("eliminado correctamente.")
        //actualizo la tabla de mensajes
        this.obtenerNovedades();
        return true;
      },
      error => {
        console.error("Error al eliminar");
        console.log(error);
        return false;
      });
  }

}
