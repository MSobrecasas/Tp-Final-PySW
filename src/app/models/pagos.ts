export class Pagos {
    id: number;
    importe: number;
    fecha: Date;
    estadoPago: string;

    Pagos(id?: number,importe?: number,fecha?: Date,estadoPago?: string){
        this.id= id;
        this.importe= importe;
        this.fecha= fecha;
        this.estadoPago= estadoPago;
    }
    
}
