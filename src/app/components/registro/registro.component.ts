import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Escribania } from 'src/app/models/escribania';
import { EscribaniaService } from 'src/app/services/escribania.service';
import { EscribanoService } from 'src/app/services/escribano.service';
import { Escribano } from 'src/app/models/escribano';

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
    if (this.password == this.passIgual) {
      this.passIguales = true;
    }
    for (var i = 0; i < this.usuarios.length; i++) {
        if (this.usuarios[i].username == this.username){
          this.usuarioRepetido = true;
          alert("Nombre de usuario existente");
        }
    }

    for (var i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].dni == this.dni){
        this.usuarioRepetido = true;
        alert("Dni de usuario existente");
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
    this.nombre=null;
    this.apellido=null;
    this.fechaNac=null;
    this.direccion=null;
    this.telefono=null;
    this.email=null;
    this.foto=null;
    this.username=null;
    this.password=null;
    this.tipoUsuario=null;
    this.estado=null;
    this.dni=null;
    this.repetido=null;
    this.bandRepetido=null;
    this.passIgual=null;
    this.escribania=null;
  }
}
