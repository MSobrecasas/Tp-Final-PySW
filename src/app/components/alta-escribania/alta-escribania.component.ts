import { Component, OnInit } from '@angular/core';
import { EscribaniaService } from 'src/app/services/escribania.service';
import { Escribania } from 'src/app/models/escribania';
import { Escribano } from 'src/app/models/escribano'
import { EscribanoService } from 'src/app/services/escribano.service';

@Component({
  selector: 'app-alta-escribania',
  templateUrl: './alta-escribania.component.html',
  styleUrls: ['./alta-escribania.component.css']
})
export class AltaEscribaniaComponent implements OnInit {
  escribano: Escribano;
  escribanos: Array<Escribano>;
  //
  escribania: Escribania;
  escribaniaMod: Escribania;
  escribanias: Array<Escribania>;

  constructor(private escribaniaService: EscribaniaService, private escribanoService: EscribanoService) {
    this.escribania = new Escribania();
    this.escribaniaMod = new Escribania();
    this.escribanias = new Array<Escribania>();
    this.escribanos = new Array<Escribano>();
    this.obtenerEscribania();
  }

  ngOnInit() {
  }

  public obtenerEscribania() {
    this.escribaniaService.getEscribanias().
      subscribe(
        res => {
          this.escribanias = res['escribanias'];
          console.log(this.escribanias);
        }
      )
  }

  public obtenerEscribanos() {
    this.escribanoService.getEscribanos().
      subscribe(
        res => {
          this.escribanos = res['escribanos'];
          console.log(this.escribanos);
        }
      )
  }
  public nuevoEscribania() {
    this.escribaniaMod.estado = true;
    this.escribania = this.escribaniaMod;
    this.escribaniaService.newEscribania(this.escribania)
      .subscribe(
        result => {
          console.log("agregado correctamente.");
          this.obtenerEscribania();
        },
        error => {
          alert("Error al agregar.");
        }
      );
  }
  public elegirEscribania(escribania: Escribania) {
    //Creo una copia del escribania recibido como parametro para NO modificarlo
    //ya que el parametro esta mostrandose por el binding en el datatable
    this.escribania = Object.assign(this.escribania, escribania);

  }

  public actualizarEscribania() {

    this.escribaniaService.modificarEscribania(this.escribania).subscribe(
      data => {
        console.log("escribania actualizada.")
        //actualizo la tabla de mensajes
        this.obtenerEscribania();
        return true;
      },
      error => {
        console.error("Error al actualizar escribania");
        console.log(error);
        return false;
      });
  }

  public borrarEscribania(id: number) {
    this.escribaniaService.borrarEscribania(id).subscribe(
      result => {
        console.log("borrado correctamente.")
        //actualizo la tabla de escribanias
        this.obtenerEscribania();
        return true;
      },
      error => {
        console.error("Error deleting!");
        console.log(error);
        return false;
      }
    )
  }

   public escribanosEnEscribania(){
     
   }
}
