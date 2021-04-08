import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  {path: 'tuteur', loadChildren: () => import('./features/tuteur/tuteur.module').then(m => m.TuteurModule) },
  {path: 'client', loadChildren: () => import('./features/client/client.module').then(m => m.ClientModule) },
  {path: 'home', component: HomeComponent},
  { path: '', component:HomeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
