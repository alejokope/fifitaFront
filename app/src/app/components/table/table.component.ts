import { Component, OnInit } from '@angular/core';
import { FifaServiceComponent } from '../services/fifa-service/fifa-service.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  table: Equipo[] = [];
  constructor(private fifaService: FifaServiceComponent) { }

  ngOnInit() {
    this.fifaService.fetchTable().subscribe((res: Equipo[]) => {
      this.table = res;
    });
  }
}


export interface Equipo {
  id: number;
  equipo: EquipoDescripcion;
  partidosJugados: number;
  partidosGanados: number;
  partidosEmpatados: number;
  partidosPerdidos: number;
  diferenciaDeGoles: number;
  puntos: number;
}
export interface EquipoDescripcion {
  id: number;
  nombre: string;
  imagen: string;
}
