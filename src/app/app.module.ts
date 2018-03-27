import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { CoreModule } from './core/core.module';
import { TableCaseComponent } from './tables/table-case/table-case.component';
import { TableWeaponComponent } from './tables/table-weapon/table-weapon.component';
import { TableVehiculeComponent } from './tables/table-vehicule/table-vehicule.component';
import { TablePieceofevidenceComponent } from './tables/table-pieceofevidence/table-pieceofevidence.component';
import { TableWitnessComponent } from './tables/table-witness/table-witness.component';
import { TableVictimComponent } from './tables/table-victim/table-victim.component';
import { TableSuspectComponent } from './tables/table-suspect/table-suspect.component';
import { PageAffaireComponent } from './modules/pages/page-affaire/page-affaire.component';
import { ExploreTablesComponent } from './modules/pages/page-affaire/explore-tables/explore-tables.component';
import { PopupVehiculeComponent } from './popup/popup-vehicule/popup-vehicule.component';
import { PopupWeaponComponent } from './popup/popup-weapon/popup-weapon.component';
import { PopupPieceofevidenceComponent } from './popup/popup-pieceofevidence/popup-pieceofevidence.component';
import { VehiculeComponent } from './modules/vehicule/vehicule.component';
import { DetailVehiculeComponent } from './modules/vehicule/detail-vehicule/detail-vehicule.component';
import { TableVehiculesComponent } from './tables/table-vehicules/table-vehicules.component';
import { FormVehiculeComponent } from './modules/vehicule/form-vehicule/form-vehicule.component';
import { PopupDeleteLinkComponent } from './popup/popup-delete-link/popup-delete-link.component';
import { PieceOfEvidenceComponent } from './modules/piece-of-evidence/piece-of-evidence.component';
import { DetailPieceOfEvidenceComponent } from './modules/piece-of-evidence/detail-piece-of-evidence/detail-piece-of-evidence.component';
import { FormPieceOfEvidenceComponent } from './modules/piece-of-evidence/form-piece-of-evidence/form-piece-of-evidence.component';
import { TablePieceOfEvidenceComponent } from './tables/table-piece-of-evidence/table-piece-of-evidence.component';
import { PopupAssociateComponent } from './modules/pages/page-affaire/popup-associate/popup-associate.component';
import { AssociateVehiculeComponent } from './modules/pages/page-affaire/popup-associate/associate-vehicule/associate-vehicule.component';
import { PopupService } from './core/popup.service';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { MessageAffaireComponent } from './modules/pages/page-affaire/message-affaire/message-affaire.component';






@NgModule({
  declarations: [
    AppComponent,
    TableCaseComponent,
    TableWeaponComponent,
    TableVehiculeComponent,
    TablePieceofevidenceComponent,
    TableWitnessComponent,
    TableVictimComponent,
    TableSuspectComponent,
    PageAffaireComponent,
    ExploreTablesComponent,
    PopupVehiculeComponent,
    PopupWeaponComponent,
    PopupPieceofevidenceComponent,
    VehiculeComponent,
    DetailVehiculeComponent,
    TableVehiculesComponent,
    FormVehiculeComponent,
    PopupDeleteLinkComponent,
    PieceOfEvidenceComponent,
    DetailPieceOfEvidenceComponent,
    FormPieceOfEvidenceComponent,
    TablePieceOfEvidenceComponent,
    PopupAssociateComponent,
    AssociateVehiculeComponent,
    DashboardComponent,
    NavigationComponent,
    MessageAffaireComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule
  ],
  exports: [
    MaterialModule
  ],
  entryComponents: [PopupVehiculeComponent, PopupDeleteLinkComponent, PopupAssociateComponent],
  providers: [HttpClientModule, PageAffaireComponent, PopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
