import { Escribano } from './escribano';


export class Usuario {
    id: number;
    nombre: string;
    apellido: string;
    fechaNac: Date;
    direccion: string;
    telefono: string;
    email: string;
    foto: string;
    username: string;
    password: String;
    tipoUsuario: string;
    escribano: Escribano;
    estado: boolean;
    dni: string;

    Usuario(id?: number, nombre?: string, apellido?: string, fechaNac?: Date, direccion?: string,
        telefono?: string, email?: string, foto?: string, username?: string, password?: String,
        tipoUsuario?: string, escribano?: Escribano, estado?: boolean, dni?: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNac = fechaNac;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.foto = foto;
        this.username = username;
        this.password = password;
        this.tipoUsuario = tipoUsuario;
        this.escribano = escribano;
        this.estado = estado;
        this.dni = dni;
    }
}
