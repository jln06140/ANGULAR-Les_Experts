import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavigationComponent } from './view/navigation/navigation.component';
import { LoginComponent } from './view/login/login.component';
import { TableCaseComponent } from './view/tables/table-case/table-case.component';
import { PageDashboardComponent } from './view/pages/page-dashboard/page-dashboard.component';
import { TableWeaponComponent } from './view/tables/table-weapon/table-weapon.component';
import { TableVehiculeComponent } from './view/tables/table-vehicule/table-vehicule.component';
import { TablePieceofevidenceComponent } from './view/tables/table-pieceofevidence/table-pieceofevidence.component';
import { TableWitnessComponent } from './view/tables/table-witness/table-witness.component';
import { TableVictimComponent } from './view/tables/table-victim/table-victim.component';
import { TableSuspectComponent } from './view/tables/table-suspect/table-suspect.component';
import { PageAffaireComponent } from './view/pages/page-affaire/page-affaire.component';
import { ExploreTablesComponent } from './view/pages/page-affaire/explore-tables/explore-tables.component';
import { MessageAffaireComponent } from './view/pages/page-affaire/message-affaire/message-affaire.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    TableCaseComponent,
    PageDashboardComponent,
    TableWeaponComponent,
    TableVehiculeComponent,
    TablePieceofevidenceComponent,
    TableWitnessComponent,
    TableVictimComponent,
    TableSuspectComponent,
    PageAffaireComponent,
    ExploreTablesComponent,
    MessageAffaireComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
