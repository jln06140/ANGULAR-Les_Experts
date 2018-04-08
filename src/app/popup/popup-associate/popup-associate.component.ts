import { Component, OnInit, Inject } from '@angular/core';
import { PoeService } from '../../core/api/poe.service';
import { VehiculeService } from '../../core/api/vehicule.service';
import { WeaponService } from '../../core/api/weapon.service';
import { Vehicule, Weapon, PieceOfEvidence, Case, PoliceCaseVehicule } from '../../core/model';
import { CaseService } from '../../core/api/case.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-popup-associate',
  templateUrl: './popup-associate.component.html',
  styleUrls: ['./popup-associate.component.css']
})
export class PopupAssociateComponent implements OnInit {
  sections = ['Pièces à conviction', 'Armes', 'Véhicules'];
  selectedSection: string;
  selectedPieceOfEvidence: PieceOfEvidence;
  selectedWeapon: Weapon;
  selectedVehicule: Vehicule;
  vehicules: Vehicule[];
  weapons: Weapon[];
  convictions: PieceOfEvidence[];
  policeCase: Case;

  constructor(
    private vehiculeService: VehiculeService,
    private weaponService: WeaponService,
    private poeService: PoeService,
    private caseService: CaseService,
    @Inject(MAT_DIALOG_DATA) public data) { }

  // appel de l'API pour récupération des tables
  ngOnInit() {
    this.vehiculeService.getVehicules().subscribe(
      data => this.vehicules = data);
    this.weaponService.getWeapons().subscribe(
      data => this.weapons = data);
    this.poeService.getPieceOfEvidences().subscribe(
      data => this.convictions = data);
    this.policeCase = this.data;
  }

  associatePoe(item) {
    this.policeCase.pieceOfEvidence.push(item);
    this.caseService.associateCaseItem(this.policeCase).subscribe();
  }
  associateWeapon(item) {
    this.policeCase.weapon.push(item);
    this.caseService.associateCaseItem(this.policeCase).subscribe();
  }
  associateVehicule(vehicule: Vehicule) {
    const idVehicule: number = vehicule.id;
    const idCase: number = this.policeCase.id;
    const policeCaseVehicule: PoliceCaseVehicule = {idCase, idVehicule};
    this.vehiculeService.associateVehicule(policeCaseVehicule, idCase, idVehicule);
    console.log(policeCaseVehicule);

    // this.policeCase.vehicule.push(item);
    // this.caseService.associateCaseItem(this.policeCase).subscribe();
  }


}
