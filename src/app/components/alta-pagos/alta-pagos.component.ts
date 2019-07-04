import { Component, OnInit } from '@angular/core';
import { PagosService } from 'src/app/services/pagos.service';
import { Pagos } from 'src/app/models/pagos';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import * as printJS from 'print-js'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alta-pagos',
  templateUrl: './alta-pagos.component.html',
  styleUrls: ['./alta-pagos.component.css']
})
export class AltaPagosComponent implements OnInit {


  pagos: Pagos;
  listaPagos: Array<Pagos>;
  usuario: Usuario;
  usuarios: Array<Usuario>;
  //Validaciones
  impEsValido: string;
  detEsValido: string;
  //variables para asignar
  id: number;
  importe: number;
  fecha: Date;
  estadoPago: boolean;
  fechaPago: string;
  detalle: string;
  usuarioN: Usuario;
  //PrintJS
  jsonPagos: JSON;
  //filtro
  filtroPago = "";
  filtroFecha: "";
  filtroFecha2: Date;
  public meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

  constructor(private pagosService: PagosService, private usuarioService: UsuarioService) {
    this.pagos = new Pagos;
    this.usuarioN = new Usuario;
    this.listaPagos = new Array<Pagos>();
    this.usuarios = new Array<Usuario>();
    this.obtenerPagos();
    this.obtenerUsuarios();
  }

  ngOnInit() {
  }
  public obtenerPagos() {
    this.pagosService.getsListaPagos()
      .subscribe(
        results => {
          this.listaPagos = results['listaPagos'];
          this.jsonPagos = results['listaPagos']
          console.log(this.listaPagos);
        }
      );

  }
  public obtenerUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe(
        results => {
          this.usuarios = results['usuarios'];
          console.log(this.usuarios);
        }
      );

  }

  public nuevoPago() {
    this.pagos.importe = this.importe;
    this.pagos.fecha = new Date();
    this.pagos.detalle = this.detalle;
    this.pagos.usuario = this.usuario;
    if (this.validarDatos()) {
      this.pagosService.newPago(this.pagos)
        .subscribe(
          result => {
            console.log("agregado correctamente.");
            this.obtenerPagos();
            alert("Pago Generado");
          },
          error => {
            alert("Error al agregar.");
          }
        );
    }

  }
  public elegirPago(pagos: Pagos) {
    //Creo una copia del pago recibido como parametro para NO modificarlo
    //ya que el parametro esta mostrandose por el binding en el datatable
    this.pagos = Object.assign(this.pagos, pagos);
    this.pagos.usuario = this.usuarios.find(function (item: Usuario) {
      return item.id === pagos.usuario.id;
    })
    this.importe = this.pagos.importe;
    this.fecha = this.pagos.fecha;
    this.usuario = this.pagos.usuario;
  }

  public actualizarPago(pagos: Pagos) {
    this.pagos = Object.assign(this.pagos, pagos);
    this.importe = this.pagos.importe;
    this.fecha = new Date();
    this.usuario = this.pagos.usuario;
    this.detalle = this.pagos.detalle;
    this.pagos.fecha = this.fecha;
    this.pagos.estadoPago = true;
    this.pagos.fechaPago = new Date();
    this.pagosService.modificarPagos(this.pagos).subscribe(
      data => {
        console.log("Pago registrado.")
        //actualizo la tabla de mensajes
        this.obtenerPagos();
        alert("Pago Registrado");
        return true;
      },
      error => {
        console.error("Error al registrar pago");
        console.log(error);
        alert("Error al generar Pago");
        return false;
      });
  }

  public borrarPago(id: number) {
    this.pagosService.borrarPagos(id).subscribe(
      result => {
        console.log("borrado correctamente.")
        //actualizo la tabla de pagos
        this.obtenerPagos();
        alert("Pago Borrado");
        return true;
      },
      error => {
        console.error("Error deleting!");
        console.log(error);
        alert("No se puedo borrar");
        return false;
      }
    )
  }
  validarDatos() {
    let completar: boolean = true;
    if (this.importe == null || this.importe < 0) {
      this.impEsValido = 'is-invalid'
      completar = false
    } else {
      this.impEsValido = 'is-valid'
    }
    if (this.detalle == null || this.detalle == '') {
      this.detEsValido = 'is-invalid'
      completar = false
    } else {
      this.detEsValido = 'is-valid'
    }
    return completar;
  }
  printjs(tablita: HTMLDivElement) {
    var ddas: HTMLDivElement;
    ddas = tablita;
    ddas.hidden = false;
    printJS({
      printable: ddas.id,
      type: 'html',
      css: ['https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',],
      header: '<h3 class="custom-h3">Registro</h3>',
      style: '.custom-h3 { color: green; text-decoration-line: underline;}',
      documentTitle: 'REGISTRO DE PAGOS',
      onLoadingEnd: () => {
        ddas.hidden = true;
      },
    })
  }

  limpiar() {
    console.log(this.filtroFecha);
    this.filtroFecha = "";
    console.log(new Date(1562278431000));
    console.log(new Date);
    console.log(this.filtroFecha2);
  }
}