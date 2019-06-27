import { Component, OnInit } from '@angular/core';
import { PagosService } from 'src/app/services/pagos.service';
import { Pagos } from 'src/app/models/pagos';
import { Escribano } from 'src/app/models/escribano';
import { EscribanoService } from 'src/app/services/escribano.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

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
  //variables para asignar
  id: number;
  importe: number;
  fecha: Date;
  estadoPago: boolean;
  fechaPago: string;
  detalle: string;
  usuarioN: Usuario;


  constructor(private pagosService: PagosService, private usuarioService:UsuarioService) {
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
    this.fecha = this.pagos.fecha;
    this.usuario = this.pagos.usuario;
    this.detalle = this.pagos.detalle;
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