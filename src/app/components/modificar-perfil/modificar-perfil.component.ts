import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/models/usuario';
import { Escribania } from 'src/app/models/escribania';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.css']
})
export class ModificarPerfilComponent implements OnInit {
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

  constructor(public loginService: LoginService,
    public usuarioService: UsuarioService) {
    this.usuario = new Usuario();
    this.obtenerUsuario();
  }

  ngOnInit() {
    this.obtenerUsuarios();
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
  public obtenerUsuario() {
    this.usuarioService.getUsuario(this.loginService.userLogged.id)
      .subscribe(
        results => {
          this.usuario = results;
          console.log(this.usuario);
          this.elegirUsuario();
        }
      );
  }

  public elegirUsuario() {
    this.loginService.userLogged.id;
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
}
