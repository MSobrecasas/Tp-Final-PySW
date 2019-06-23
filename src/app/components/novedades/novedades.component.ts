import { Component, OnInit } from '@angular/core';
class ValueAndText {
  constructor(public Value: string, public Text: string) { }
}

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  titleArray: ValueAndText[] = [new ValueAndText("Mister", "Mister-Text"),
  new ValueAndText("Lord", "Lord-Text"),new ValueAndText("Mister", "Mister-Text"),
  new ValueAndText("Mister", "Mister-Text")];

  constructor() { }

  ngOnInit() {
  }

}
