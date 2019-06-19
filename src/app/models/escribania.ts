export class Escribania {
    id: number;
    nombre: string;
    direccion: string;
    telefono: string;  
    estado: boolean;

    Escribania(id?: number, nombre?: string, direccion?: string, telefono?: string, estado?: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.estado = estado;
    }
}
