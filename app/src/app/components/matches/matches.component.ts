import { Component, OnInit } from '@angular/core';
import { FifaServiceComponent } from '../services/fifa-service/fifa-service.component';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: Equipo[];
  constructor(private fifaService : FifaServiceComponent) { }

  ngOnInit() {
    this.fifaService.fetchMatches().subscribe((res: Equipo[]) => {
      this.matches = res;
    });
  }


}

export interface Equipo {
  id: number;
  local: Team;
  visitante: Team;
  golesLocal: string;
  golesVisitante:string;
}

export interface Team{
  id:number;
  nombre: string;
  imagen: string;
}
