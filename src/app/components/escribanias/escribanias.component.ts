import { Component, OnInit } from '@angular/core';
import { Escribano } from 'src/app/models/escribano';
import { Escribania } from 'src/app/models/escribania';
import { EscribaniaService } from 'src/app/services/escribania.service';
import { EscribanoService } from 'src/app/services/escribano.service';

@Component({
  selector: 'app-escribanias',
  templateUrl: './escribanias.component.html',
  styleUrls: ['./escribanias.component.css']
})
export class EscribaniasComponent implements OnInit {

  escribano: Escribano;
  escribanos: Array<Escribano>;
  escribanosAsoc: Array<Escribano>;
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
}