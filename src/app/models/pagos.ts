import { Escribano } from './escribano';

export class Pagos {
    id: number;
    escribano: Escribano;
    importe: number;
    fecha: Date;
    estadoPago: boolean;
    detalle: string;
    fechaPago: Date;

    Pagos(id?: number,escribano?: Escribano, importe?: number, fecha?: Date, estadoPago?: boolean,detalle?: string, fechaPago?: Date) {
        this.id = id;
        this.escribano = escribano;
        this.importe = importe;
        this.fecha = fecha;
        this.estadoPago = estadoPago;
        this.detalle = detalle;
        this.fechaPago = fechaPago;
    }

}
