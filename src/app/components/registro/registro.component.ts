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
  passIgual : string;
  legajo: string;
  escribania: Escribania;

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
  public datosRepetidos() {
    this.bandRepetido = false;
    this.repetido = "Datos repetidos: ";
    this.usuarios.forEach(function (user) {
      if (this.usuario.dni == user.dni) {
        this.repetido += "Dni ";
        this.bandRepetido = true;
      }
      if (this.usuario.username == user.username) {
        this.repetido += "UserName ";
        this.bandRepetido = true;
      }
      if (this.bandRepetido == true) {
        // ACA MOSTRAR LOS DATOS REPETIDO COMO MAS TE GUSTE
      } else {
        this.nuevoUsuario();
      }
    });
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
    //Creo una copia del mensaje recibido como parametro para NO modificarlo
    //ya que el parametro esta mostrandose por el binding en el datatable
    this.usuario = Object.assign(this.usuario, usuario);
    /*  //se asigna a la propiedad mensaje.empresa el correspondiente en el
     //array de empresas, ya que este array es fuente de datos del <select>
     this.usuario.empresa = this.empresas.find(function(item: Empresa) {
     return item.id === mensaje.empresa.id;
     }); */
  }


  public actualizarUsuario() {
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

  public bajaUsuario(usuario : Usuario) {
    this.usuario = Object.assign(this.usuario, usuario);
    this.usuario.nombre = this.nombre;
    this.usuario.apellido = this.apellido;
    this.usuario.direccion = this.direccion;
    this.usuario.dni = this.dni;
    this.usuario.email = this.email;
    this.usuario.estado = false; // ACA se le da de baja
    this.usuario.fechaNac = this.fechaNac;
    this.usuario.foto = "ACA NO SE QUE VA EN LA FOTO"
    this.usuario.password = this.password;
    this.usuario.telefono = this.telefono;
    this.usuario.tipoUsuario = this.tipoUsuario;
    this.usuario.username = this.username;
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
