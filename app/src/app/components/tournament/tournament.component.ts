import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  notActive: Boolean = true;
  //todo hacer el torneo en el back y hacer la pegada aca por ahora siempre es false.
  constructor() { }

  ngOnInit() {
  }

  isNotActiveTournament(){
    return this.notActive;
  }
}
