import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Escribania } from 'src/app/models/escribania';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EscribaniaService } from 'src/app/services/escribania.service';

@Component({
  selector: 'app-escribanos',
  templateUrl: './escribanos.component.html',
  styleUrls: ['./escribanos.component.css']
})
export class EscribanosComponent implements OnInit {

  usuario: Usuario;
  usuarioMod: Usuario;
  usuarios: Array<Usuario>;

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
  escribanias: Array<Escribania>;
  escribanos: Array<Usuario>;
  passIguales: boolean = false;
  usuarioRepetido: boolean = false;
  agregado: boolean;
  tablaEscribanos= false;


  constructor(private usuarioService: UsuarioService,
    private escribaniaService: EscribaniaService) {
    this.usuarioMod = new Usuario();
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
    this.escribanias = new Array<Escribania>();
    this.escribanos = new Array<Usuario>();
    this.escribania = new Escribania();
    this.obtenerUsuarios();
    this.obtenerEscribanias();
  }

  ngOnInit() {
    
  }
  public obtenerEscribanias() {
    this.escribaniaService.getEscribanias()
      .subscribe(
        results => {
          this.escribanias = results['escribanias'];
          console.log(this.escribanias);
        }
      );
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
 



  public validarUsuario() {
    this.usuarioRepetido = false;
    this.passIguales = false;
    if (this.password == this.passIgual) {
      this.passIguales = true;
    }
    for (var i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].username == this.username) {
        this.usuarioRepetido = true;
        alert("Nombre de usuario existente");
      }
    }

    for (var i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].dni == this.dni) {
        this.usuarioRepetido = true;
        alert("Dni de usuario existente");
      }
    }

    for (var i = 0; i < this.escribanos.length; i++) {
      if (this.usuarios[i].legajo == this.legajo) {
        this.usuarioRepetido = true;
        alert("Legajo de usuario existente");
      }
    }

    if (this.usuarioRepetido == false) {
      this.nuevoUsuario();
    }


  }
  public nuevoUsuario() {
    this.agregado = false;
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
    this.usuario.tipoUsuario = "socio";
    this.usuario.username = this.username;
    this.usuario.legajo = this.legajo;
    this.usuario.escribania = this.escribania;
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
    this.escribania = this.usuario.escribania;
    this.legajo = this.usuario.legajo;
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
    this.usuario.legajo = this.legajo;
    this.usuario.escribania = this.escribania;
    this.usuarioService.modificarEscribano(this.usuario).subscribe(
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
    this.usuarioService.modificarEscribano(this.usuario).subscribe(
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