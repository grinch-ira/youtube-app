import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
// eslint-disable-next-line max-len
import { CardsResultsComponent } from './youtube/components/cards-results/cards-results.component';
import { CardInfoComponent } from './youtube/components/card-info/card-info.component';
import { LoginGuard } from './auth/guards/login.guard';
import { CreateCardComponent } from './admin/components/create-card/create-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'home', component: CardsResultsComponent, canActivate: [LoginGuard] },
  { path: 'info/:id', component: CardInfoComponent, canActivate:[LoginGuard] },
  { path: 'create', component: CreateCardComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
