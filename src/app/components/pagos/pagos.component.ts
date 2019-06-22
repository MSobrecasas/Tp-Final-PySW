import { Component, OnInit } from '@angular/core';
import { PagosService } from 'src/app/services/pagos.service';
import { Pagos } from 'src/app/models/pagos';
import { Escribano } from 'src/app/models/escribano';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  pagos: Pagos;
  listaPagos: Array<Pagos>;
  escribano: Escribano;
  escribanos: Array<Escribano>;
  //variables para asignar
  id: number;
  importe: number;
  fecha: Date;
  estadoPago: boolean;
  fechaPago: string;
  detalle: string;
  escribanoN: Escribano;


  constructor(private pagosService: PagosService) {
    this.pagos = new Pagos;
    this.listaPagos = new Array<Pagos>();
    this.obtenerPagos();
  }

  ngOnInit() {
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
    this.pagos.importe = this.importe;
    this.pagos.fecha = new Date();
    this.pagos.detalle = this.detalle;
    this.pagos.escribano = this.escribanoN;
    this.pagos.fechaPago = null;
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
