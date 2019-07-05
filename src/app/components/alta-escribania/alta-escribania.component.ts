import { Component, OnInit } from '@angular/core';
import { EscribaniaService } from 'src/app/services/escribania.service';
import { Escribania } from 'src/app/models/escribania';
import { Escribano } from 'src/app/models/escribano'
import { EscribanoService } from 'src/app/services/escribano.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-alta-escribania',
  templateUrl: './alta-escribania.component.html',
  styleUrls: ['./alta-escribania.component.css']
})
export class AltaEscribaniaComponent implements OnInit {
  escribano: Usuario;
  escribanos: Array<Usuario>;
  escribanosAsoc: Array<Usuario>;
  //
  escribania: Escribania;
  escribaniaMod: Escribania;
  escribanias: Array<Escribania>;

  nombre: string;
  direccion: string;
  telefono: string;
  estado: boolean;
  longitud: number;
  latitud: number;
  //Validaciones
  nomEsValido: string;
  dirEsValido: string;
  telEsValido: string;
  latEsValido: string;
  lonEsValido: string;
  //----------

  constructor(private escribaniaService: EscribaniaService, private usuarioService: UsuarioService) {
    this.escribania = new Escribania();
    this.escribaniaMod = new Escribania();
    this.escribanias = new Array<Escribania>();
    this.escribanos = new Array<Usuario>();
    this.obtenerEscribania();
    this.obtenerEscribanos();

  }

  ngOnInit() {
  }

  public obtenerEscribania() {
    this.escribaniaService.getEscribanias().
      subscribe(
        res => {
          this.escribanias = res['escribanias'];
          console.log(this.escribanias);
        }
      )
  }

  public obtenerEscribanos() {
    this.usuarioService.getUsuarios().
      subscribe(
        res => {
          this.escribanos = res['usuarios'];
          console.log(this.escribanos);
        }
      )
  }
  public nuevoEscribania() {
    if (this.validarDatos()) {
      this.escribaniaMod.nombre = this.nombre;
      this.escribaniaMod.direccion = this.direccion;
      this.escribaniaMod.telefono = this.telefono;
      this.escribaniaMod.longitud = this.longitud;
      this.escribaniaMod.latitud = this.latitud;
      this.escribaniaMod.estado = true;
      this.escribania = this.escribaniaMod;
      console.log(this.escribaniaMod);
      this.escribaniaService.newEscribania(this.escribania)
        .subscribe(
          result => {
            console.log("agregado correctamente.");
            this.obtenerEscribania();
          },
          error => {
            alert("Error al agregar.");
          }
        );
    }
  }
  public elegirEscribania(escribania: Escribania) {
    //Creo una copia del escribania recibido como parametro para NO modificarlo
    //ya que el parametro esta mostrandose por el binding en el datatable
    this.escribania = Object.assign(this.escribania, escribania);
    this.nombre = this.escribania.nombre;
    this.direccion = this.escribania.direccion;
    this.telefono = this.escribania.telefono;
    this.longitud = this.escribania.longitud;
    this.latitud = this.escribania.latitud;
  }

  public actualizarEscribania() {
    this.escribania.nombre = this.nombre;
    this.escribania.direccion = this.direccion;
    this.escribania.telefono = this.telefono;
    this.escribania.longitud = this.longitud;
    this.escribania.latitud = this.latitud;
    this.escribaniaService.modificarEscribania(this.escribania).subscribe(
      data => {
        console.log("escribania actualizada.")
        //actualizo la tabla de mensajes
        this.obtenerEscribania();
        return true;
      },
      error => {
        console.error("Error al actualizar escribania");
        console.log(error);
        return false;
      });
  }

  public borrarEscribania() {
    // this.escribania = Object.assign(this.escribania, escribania);
    this.escribania.estado = !this.escribania.estado;
    this.escribaniaService.modificarEscribania(this.escribania).subscribe(
      data => {
        console.log("escribania borrada.")
        //actualizo la tabla de mensajes
        this.obtenerEscribania();
        return true;
      },
      error => {
        console.error("Error al borrar escribania");
        console.log(error);
        return false;
      });
    /*  this.escribaniaService.borrarEscribania(id).subscribe(
       result => {
         console.log("borrado correctamente.")
         //actualizo la tabla de escribanias
         this.obtenerEscribania();
         return true;
       },
       error => {
         console.error("Error deleting!");
         console.log(error);
         return false;
       }
     ) */
  }

  public escribanosEnEscribania(escribania: Escribania) {
    this.escribanosAsoc = new Array<Usuario>();
    this.obtenerEscribanos();
    this.escribania = Object.assign(this.escribania, escribania);
    for (var i = 0; i < this.escribanos.length; i++) {
      if (this.escribanos[i].escribania != null) {
        if (this.escribania.id == this.escribanos[i].escribania.id) {
          this.escribanosAsoc.push(this.escribanos[i]);
        }
      }

    }
    console.log(this.escribanosAsoc);
    /*  this.escribanos.forEach(function (escribano) {
      
     }); */
  }
  validarDatos() {
    let completar: boolean = true;
    if (this.nombre == null) {
      this.nomEsValido = 'is-invalid'
      completar = false
    } else {
      this.nomEsValido = 'is-valid'
    }

    if (this.direccion == null) {
      this.dirEsValido = 'is-invalid'
      completar = false
    } else {
      this.dirEsValido = 'is-valid'
    }
    if (this.telefono == null) {
      this.telEsValido = 'is-invalid'
      completar = false
    } else {
      this.telEsValido = 'is-valid'
    }

    if (this.latitud == null) {
      this.latEsValido = 'is-invalid'
      completar = false
    } else {
      this.latEsValido = 'is-valid'
    }
    if (this.longitud == null) {
      this.lonEsValido = 'is-invalid'
      completar = false
    } else {
      this.lonEsValido = 'is-valid'
    }



    return completar;
  }
}
