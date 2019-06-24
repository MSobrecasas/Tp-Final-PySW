import { Escribano } from './escribano';
import { Usuario } from './usuario'

export class Pagos {
    id: number;
    usuario: Usuario;
    importe: number;
    fecha: Date;
    estadoPago: boolean;
    detalle: string;
    fechaPago: Date;

    Pagos(id?: number, usuario?: Usuario, importe?: number, fecha?: Date, estadoPago?: boolean, detalle?: string, fechaPago?: Date) {
        this.id = id;
        this.usuario = usuario;
        this.importe = importe;
        this.fecha = fecha;
        this.estadoPago = estadoPago;
        this.detalle = detalle;
        this.fechaPago = fechaPago;
    }

}
