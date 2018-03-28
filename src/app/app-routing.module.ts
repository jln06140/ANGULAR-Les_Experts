import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './core/navigation/navigation.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { PageAffaireComponent } from './modules/pages/page-affaire/page-affaire.component';
import { VehiculeComponent } from './modules/vehicule/vehicule.component';
import { DetailVehiculeComponent } from './modules/vehicule/detail-vehicule/detail-vehicule.component';
import { FormVehiculeComponent } from './modules/vehicule/form-vehicule/form-vehicule.component';
import { PieceOfEvidenceComponent } from './modules/piece-of-evidence/piece-of-evidence.component';
import { DetailPieceOfEvidenceComponent } from './modules/piece-of-evidence/detail-piece-of-evidence/detail-piece-of-evidence.component';
import { FormPieceOfEvidenceComponent } from './modules/piece-of-evidence/form-piece-of-evidence/form-piece-of-evidence.component';


// router table
const routes: Routes = [
 /* {path: '', redirectTo: '/home/dashboard', pathMatch: 'full'},
 {path: 'home', component: NavigationComponent,
  children: [ */
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'affaires/:id', component: PageAffaireComponent},
    {path: 'vehicules', component: VehiculeComponent},
    {path: 'vehicules/:id', component: DetailVehiculeComponent,
      children: [
        {path: 'edit', component: FormVehiculeComponent}]},
    {path: 'pieceOfEvidence', component: PieceOfEvidenceComponent},
    {path: 'pieceOfEvidence/:id', component: DetailPieceOfEvidenceComponent,
      children: [
        {path: 'edit', component: FormPieceOfEvidenceComponent}]},
    {path: 'newvehicule', component: FormVehiculeComponent}
  // ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
