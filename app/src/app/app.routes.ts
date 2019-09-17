import { RouterModule, Routes } from '@angular/router';
import { FifaServiceComponent } from './components/services/fifa-service/fifa-service.component';
import { TableComponent } from './components/table/table.component'; 
import { HomeComponent } from './components/home/home.component'; 
import { MatchesComponent } from './components/matches/matches.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { PositionsComponent } from './components/positions/positions.component';
const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'table', component: TableComponent },
    { path: 'matches', component: MatchesComponent},
    { path: 'servicio', component: FifaServiceComponent },
    { path: 'tournament', component: TournamentComponent},
    { path: 'positions', component: PositionsComponent },
   
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(ROUTES);