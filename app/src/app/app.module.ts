import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
//rutas
import {appRouting} from './app.routes';
//servicios
import { FifaServiceComponent } from './components/services/fifa-service/fifa-service.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { PositionsComponent } from './components/positions/positions.component';

@NgModule({
  declarations: [
    AppComponent,
    FifaServiceComponent,
    NavbarComponent,
    TableComponent,
    HomeComponent,
    MatchesComponent,
    TournamentComponent,
    PositionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
