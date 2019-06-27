export class Escribania {
    id: number;
    nombre: string;
    direccion: string;
    telefono: string;
    estado: boolean;
    longitud: number;
    latitud: number;

    Escribania(id?: number, nombre?: string, direccion?: string, telefono?: string, estado?: boolean,
        longitud?: number, latitud?: number) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.estado = estado;
        this.longitud = longitud;
        this.latitud = latitud;
    }
}
