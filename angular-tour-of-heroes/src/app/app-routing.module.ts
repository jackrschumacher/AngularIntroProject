import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //Have to list this after the dashboard components
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //Imported so app can have routing capability 
  exports: [RouterModule] //Configures the apps routing module in order to be used in the application
})
export class AppRoutingModule { }