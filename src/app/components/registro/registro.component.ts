import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Escribania } from 'src/app/models/escribania';
import { EscribaniaService } from 'src/app/services/escribania.service';
import { EscribanoService } from 'src/app/services/escribano.service';
import { Escribano } from 'src/app/models/escribano';
import { isDate } from 'util';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  //Foto
  foto2: string;
  comparar: string = 'data:image/jpeg;base64,';
  archivo: string;
  //----------
  usuario: Usuario;
  usuarioMod: Usuario;
  usuarios: Array<Usuario>;
  id: number;

  nombre: string;
  apellido: string;
  fechaNac: Date;
  direccion: string;
  telefono: string;
  email: string;
  foto: string;
  username: string;
  password: string;
  tipoUsuario: string;
  estado: boolean;
  dni: string;
  repetido: string;
  bandRepetido: boolean;
  passIgual: string;
  legajo: string;
  escribania: Escribania;
  passIguales: boolean = false;
  usuarioRepetido: boolean = false;
  //Validaciones
  nomEsValido: string;
  apeEsValido: string;
  dniEsValido: string;
  fnaEsValido: string;
  dirEsValido: string;
  telEsValido: string;
  emlEsValido: string;
  fotEsValido: string;
  userEsValido: string;
  pssEsValido: string;
  pss1EsValido: string;
  //----------
  busq: string ="";

  
  constructor(private usuarioService: UsuarioService) {
    this.usuarioMod = new Usuario();
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
    this.obtenerUsuarios();
  }

  ngOnInit() {
  }
  public obtenerUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe(
        results => {
          this.usuarios = results['usuarios'];
          console.log(this.usuarios);
        }
      );
  }

  public obtenerBorrados() {
    this.usuarioService.getUsuarios()
      .subscribe(
        results => {
          this.usuarios = results['usuarios'];
          console.log(this.usuarios);
        }
      );
    /* remueve todos que esten en estado false */
    for (var i = 0; i <= this.usuarios.length; i++) {
      if (this.usuarios[i].estado == true) {
        this.usuarios.splice(i, 1);
      }
    }


  }
  public validarUsuario() {
    this.usuarioRepetido = false;
    this.userEsValido = 'is-valid';
    this.dniEsValido = 'is-valid';
    if (this.validarDatos()) {
      if (this.password != this.passIgual) {
        this.pssEsValido = 'is-invalid'
      } else {
        this.pssEsValido = 'is-valid'
        for (var i = 0; i < this.usuarios.length; i++) {
          if (this.usuarios[i].username == this.username) {
            this.usuarioRepetido = true;
            this.userEsValido = 'is-invalid'
            alert("Nombre de usuario existente");
          }
        }

        for (var i = 0; i < this.usuarios.length; i++) {
          if (this.usuarios[i].dni == this.dni) {
            this.usuarioRepetido = true;
            this.dniEsValido = 'is-invalid'
            alert("Dni de usuario existente");
          }
        }

        if (this.usuarioRepetido == false) {
          this.nuevoUsuario();
        }
      }
    }

  }
  public nuevoUsuario() {
    this.usuario.nombre = this.nombre;
    this.usuario.apellido = this.apellido;
    this.usuario.direccion = this.direccion;
    this.usuario.dni = this.dni;
    this.usuario.email = this.email;
    this.usuario.estado = true;
    this.usuario.fechaNac = this.fechaNac;
    this.usuario.foto = this.foto;
    this.usuario.password = this.password;
    this.usuario.telefono = this.telefono;
    this.usuario.tipoUsuario = this.tipoUsuario;
    this.usuario.username = this.username;
    console.log(this.usuario);
    this.usuarioService.newUsuario(this.usuario)
      .subscribe(
        result => {
          console.log("agregado correctamente.");
          this.obtenerUsuarios();
          alert("Agregado Correctamente");
        },
        error => {
          alert("Error al agregar.");
        });
  }

  public elegirUsuario(usuario: Usuario) {
    this.usuario = Object.assign(this.usuario, usuario);
    this.nombre = this.usuario.nombre;
    this.apellido = this.usuario.apellido;
    this.direccion = this.usuario.direccion;
    this.dni = this.usuario.dni;
    this.email = this.usuario.email;
    this.estado = this.usuario.estado;
    //this.fechaNac = this.usuario.fechaNac;
    this.foto = this.usuario.foto;
    this.password = this.usuario.password;
    this.telefono = this.usuario.telefono;
    this.tipoUsuario = this.usuario.tipoUsuario;
    this.username = this.usuario.username;
  }


  public actualizarUsuario() {
    this.usuario.nombre = this.nombre;
    this.usuario.apellido = this.apellido;
    this.usuario.direccion = this.direccion;
    this.usuario.dni = this.dni;
    this.usuario.email = this.email;
    this.usuario.estado = true;
    this.usuario.fechaNac = this.fechaNac;
    this.usuario.foto = this.foto;
    this.usuario.password = this.password;
    this.usuario.telefono = this.telefono;
    this.usuario.tipoUsuario = this.tipoUsuario;
    this.usuario.username = this.username;
    this.usuarioService.modificarUsuario(this.usuario).subscribe(
      data => {
        console.log("modificado correctamente.")
        //actualizo la tabla de mensajes
        this.obtenerUsuarios();
        alert("Datos Modificados");
        return true;
      },
      error => {
        console.error("Error al modificar!");
        alert("error al  modificar");
        console.log(error);
        return false;
      });
  }

  public bajaUsuario() {
    this.usuario.nombre = this.nombre;
    this.usuario.apellido = this.apellido;
    this.usuario.direccion = this.direccion;
    this.usuario.dni = this.dni;
    this.usuario.email = this.email;
    this.usuario.fechaNac = this.fechaNac;
    this.usuario.foto = this.foto;
    this.usuario.password = this.password;
    this.usuario.telefono = this.telefono;
    this.usuario.tipoUsuario = this.tipoUsuario;
    this.usuario.username = this.username;
    this.usuario.estado = !this.estado;
    this.usuario.legajo = "";
    this.usuario.escribania = null;
    this.usuarioService.modificarUsuario(this.usuario).subscribe(
      data => {
        console.log("eliminado correctamente.")
        //actualizo la tabla de mensajes
        this.obtenerUsuarios();
        alert("Dado de baja correctamente");
        return true;
      },
      error => {
        console.error("Error al eliminar");
        alert("Error al dar de baja");
        console.log(error);
        return false;
      });
  }
  consola(dato: HTMLSelectElement) {
    console.log(dato.value);
  }
  onFileChanges(files) {
    console.log("File :: ", files),
      this.archivo = files[0].base64;
    if (this.comparar == this.archivo.substr(0, 23) && this.archivo.substr(23).length < 4000000) {
      this.foto = this.archivo;
    } else {
      alert("Inserte una Foto JPEG y menor a 4MB")
    }
  }
  vaciarCampos() {
    this.nombre = null;
    this.apellido = null;
    this.fechaNac = null;
    this.direccion = null;
    this.telefono = null;
    this.email = null;
    this.foto = null;
    this.username = null;
    this.password = null;
    this.tipoUsuario = null;
    this.estado = null;
    this.dni = null;
    this.repetido = null;
    this.bandRepetido = null;
    this.passIgual = null;
    this.escribania = null;
  }
  validarDatos() {
    let completar: boolean = true;
    this.nomEsValido = 'is-valid';
    this.apeEsValido = 'is-valid';
    this.fnaEsValido = 'is-valid';
    this.dirEsValido = 'is-valid';
    this.telEsValido = 'is-valid';
    this.emlEsValido = 'is-valid';
    /*   if (this.nombre == null) {
        this.nomEsValido = 'is-invalid'
        completar = false
      } else {
        this.nomEsValido = 'is-valid'
      }
      if (this.apellido == null) {
        this.apeEsValido = 'is-invalid'
        completar = false
      } else {
        this.apeEsValido = 'is-valid'
        console.log(this.apeEsValido)
      }
      if (this.dni == null) {
        this.dniEsValido = 'is-invalid'
        completar = false
      } else {
        this.dniEsValido = 'is-valid'
      }
      if (!this.fechaNac) {
        this.fnaEsValido = 'is-invalid'
        completar = false
      } else {
        this.fnaEsValido = 'is-valid'
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
      if (this.email == null) {
        this.emlEsValido = 'is-invalid'
        completar = false
      } else {
        this.emlEsValido = 'is-valid'
      } */
    if (this.foto == null) {
      this.fotEsValido = 'is-invalid'
      completar = false
    } else {
      this.fotEsValido = 'is-valid'
    }
    /* if (this.username == null) {
      this.userEsValido = 'is-invalid'
      completar = false
    } else {
      this.userEsValido = 'is-valid'
    }
    if (this.password == null) {
      this.pssEsValido = 'is-invalid'
      completar = false
    } else {
      this.pssEsValido = 'is-valid'
    } */
    this.userEsValido = 'is-valid';
    this.pssEsValido = 'is-valid';


    return completar;
  }
}