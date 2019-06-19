import { Usuario } from './usuario';

export class Novedades {

    id: number;
    descripcion: string;
    fecha: Date;
    usuario: Usuario;


    Novedades(id?: number, descripcion?: string, fecha?: Date, usuario?: Usuario) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.usuario = usuario;
    }
}
