import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { PageDashboardComponent } from './view/pages/page-dashboard/page-dashboard.component';
import { PageAffaireComponent } from './view/pages/page-affaire/page-affaire.component';

const routes: Routes = [
 {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
 {path: 'login', component: LoginComponent},
 {path: 'dashboard', component: PageDashboardComponent },
 {path: 'affaire', component: PageAffaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
