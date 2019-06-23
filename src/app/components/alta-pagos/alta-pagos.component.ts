import { Component, OnInit } from '@angular/core';
import { PagosService } from 'src/app/services/pagos.service';
import { Pagos } from 'src/app/models/pagos';
import { Escribano } from 'src/app/models/escribano';
import { EscribanoService } from 'src/app/services/escribano.service';

@Component({
  selector: 'app-alta-pagos',
  templateUrl: './alta-pagos.component.html',
  styleUrls: ['./alta-pagos.component.css']
})
export class AltaPagosComponent implements OnInit {

  pagos: Pagos;
  listaPagos: Array<Pagos>;
  escribano: Escribano;
  escribanos: Array<Escribano>;
  //variables para asignar
  id: number;
  importeN: number;
  fechaN: Date;
  estadoPagoN: boolean;
  fechaPagoN: string;
  detalleN: string;
  escribanoN: Escribano;



  constructor(private pagosService: PagosService, private escribanoService: EscribanoService) {
    this.pagos = new Pagos;
    this.listaPagos = new Array<Pagos>();
    this.escribanos = new Array<Escribano>();
    this.escribanoN = new Escribano;
    this.obtenerPagos();
    this.obtenerEscribanos();
  }

  ngOnInit() {
  }

  public obtenerEscribanos() {
    this.escribanoService.getEscribanos()
      .subscribe(
        results => {
          this.escribanos = results['escribanos'];
          console.log(this.escribanos);
        }
      );

  }
  public obtenerPagos() {
    this.pagosService.getsListaPagos()
      .subscribe(
        results => {
          this.listaPagos = results['listaPagos'];
          console.log(this.listaPagos);
        }
      );

  }


  public nuevoPago() {
    this.pagos.estadoPago = false;
    this.pagos.importe = this.importeN;
    this.pagos.fecha = new Date();
    this.pagos.detalle = this.detalleN;
    this.pagos.escribano = this.escribanoN;
    this.pagos.fechaPago = new Date();
    this.pagosService.newPago(this.pagos)
      .subscribe(
        result => {
          console.log("agregado correctamente.");
          this.obtenerPagos();
        },
        error => {
          alert("Error al agregar.");
        }
      );
  }
  public elegirPago(pagos: Pagos) {
    //Creo una copia del pago recibido como parametro para NO modificarlo
    //ya que el parametro esta mostrandose por el binding en el datatable
    this.pagos = Object.assign(this.pagos, pagos);
    this.pagos.escribano = this.escribanos.find(function (item: Escribano) {
      return item.id === pagos.escribano.id;
    })
  }

  public actualizarPago() {

    this.pagos.estadoPago = true;
    this.pagos.fechaPago = new Date();
    this.pagosService.modificarPagos(this.pagos).subscribe(
      data => {
        console.log("Pago registrado.")
        //actualizo la tabla de mensajes
        this.obtenerPagos();
        return true;
      },
      error => {
        console.error("Error al registrar pago");
        console.log(error);
        return false;
      });
  }

  public borrarPago(id: number) {
    this.pagosService.borrarPagos(id).subscribe(
      result => {
        console.log("borrado correctamente.")
        //actualizo la tabla de pagos
        this.obtenerPagos();
        return true;
      },
      error => {
        console.error("Error deleting!");
        console.log(error);
        return false;
      }
    )
  }


}
