import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSessionComponent } from './add-session/add-session.component';
import { DisponibiliteComponent } from './disponibilite/disponibilite.component';
import { AddPeriodeComponent } from './gerer-periode/add-periode/add-periode.component';
import { ListePeriodesComponent } from './gerer-periode/liste-periodes/liste-periodes.component';

const routes: Routes = [
  { path: 'disponibilite', component: DisponibiliteComponent },
  { path: 'addsession', component: AddSessionComponent },
  //{ path: 'addperiode/:id', component: AddPeriodeComponent },
  { path: 'periodes', component: ListePeriodesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TuteurRoutingModule { }
