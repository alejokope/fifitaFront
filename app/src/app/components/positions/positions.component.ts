import { Component, OnInit } from '@angular/core';
import { FifaServiceComponent } from '../services/fifa-service/fifa-service.component';
@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  table : any[];
  constructor(private fifaService: FifaServiceComponent) { }

  ngOnInit() {
    this.fifaService.fetchTable().subscribe((res: any[]) => {
      this.table = res;
    });
  }

}
