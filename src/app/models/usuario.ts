import { Escribano } from './escribano';
import { Escribania } from './escribania';


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
    password: string;
    tipoUsuario: string;
    estado: boolean;
    dni: string;
    legajo: string;
    escribania: Escribania;

    Usuario(id?: number, nombre?: string, apellido?: string, fechaNac?: Date, direccion?: string,
        telefono?: string, email?: string, foto?: string, username?: string, password?: string,
        tipoUsuario?: string, estado?: boolean, dni?: string, legajo?: string, escribania?: Escribania) {
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
        this.estado = estado;
        this.dni = dni;
        this.legajo = legajo;
        this.escribania = escribania;
    }
}