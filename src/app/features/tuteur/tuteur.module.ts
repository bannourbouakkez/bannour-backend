import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';

import { TuteurRoutingModule } from './tuteur-routing.module';
import { DisponibiliteComponent } from './disponibilite/disponibilite.component';
import { PickDatesComponent } from './gerer-periode/pick-dates/pick-dates.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { SessionsComponent } from './sessions/sessions.component';
import { DialogDateSessionComponent } from './dialog-session/dialog-date-session/dialog-date-session.component';
import { AddPeriodeComponent } from './gerer-periode/add-periode/add-periode.component';
import { ListePeriodesComponent } from './gerer-periode/liste-periodes/liste-periodes.component';
import { DialogSessionComponent } from './dialog-session/dialog-session/dialog-session.component';
//import { HttpClient, HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [DisponibiliteComponent, PickDatesComponent, AddSessionComponent, SessionsComponent, DialogSessionComponent, DialogDateSessionComponent, AddPeriodeComponent, ListePeriodesComponent],
  imports: [
    CommonModule,
    SharedModule,
    TuteurRoutingModule,
    //HttpClientModule,
    //HttpClient,

  ],
  providers: [
  ]
  ,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents:[AddPeriodeComponent]

})
export class TuteurModule { }
