import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Escribania } from 'src/app/models/escribania';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
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
    /*    remueve todos que esten en estado false 
      for (var i=0; i<this.usuarios.length; i++){
        if( this.usuarios[i].estado == false){
          this.usuarios.splice(i,1);
        }
      } */
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
    this.passIguales = false;
    if (this.usuario.password == this.passIgual) {
      this.passIguales = true;
    }
    for (var i = 0; i < this.usuarios.length; i++) {
        if (this.usuarios[i].username == this.username){
          this.usuarioRepetido = true;
          alert("Nombre de usuario existente");
        }
    }

    if (this.usuarioRepetido == false){
      this.nuevoUsuario();
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
    this.usuario.foto = "ACA NO SE QUE VA EN LA FOTO"
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
        return true;
      },
      error => {
        console.error("Error al modificar!");
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
    this.usuarioService.modificarUsuario(this.usuario).subscribe(
      data => {
        console.log("eliminado correctamente.")
        //actualizo la tabla de mensajes
        this.obtenerUsuarios();
        return true;
      },
      error => {
        console.error("Error al eliminar");
        console.log(error);
        return false;
      });
  }
  consola(dato: HTMLSelectElement) {
    console.log(dato.value);
  }
}
