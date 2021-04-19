import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interface/gifs.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent implements OnInit {

  get resultados(): Gif[]{
    return this.gifService.resultados;
  }
  constructor(
    private gifService: GifsService
  ) { }

  ngOnInit(): void {
  }

}
