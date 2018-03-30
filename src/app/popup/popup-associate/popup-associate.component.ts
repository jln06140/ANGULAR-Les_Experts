import { Component, OnInit, Inject } from '@angular/core';
import { PoeService } from '../../core/api/poe.service';
import { VehiculeService } from '../../core/api/vehicule.service';
import { WeaponService } from '../../core/api/weapon.service';
import { Vehicule, Weapon, PieceOfEvidence } from '../../core/model';
import { CaseService } from '../../core/api/case.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-popup-associate',
  templateUrl: './popup-associate.component.html',
  styleUrls: ['./popup-associate.component.css']
})
export class PopupAssociateComponent implements OnInit {
  sections = ['Pièces à conviction', 'Armes', 'Véhicules'];
  selectedSection;
  selectedPieceOfEvidence;
  selectedWeapon;
  selectedVehicule;
  vehicules: Vehicule[];
  weapons: Weapon[];
  convictions: PieceOfEvidence[];

  constructor(
    private vehiculeService: VehiculeService,
    private weaponService: WeaponService,
    private poeService: PoeService,
    private caseService: CaseService,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.vehiculeService.getVehicules().subscribe(
      data => this.vehicules = data);
    this.weaponService.getWeapons().subscribe(
      data => this.weapons = data);
    this.poeService.getPieceOfEvidences().subscribe(
      data => this.convictions = data);
  }

  associatePoe(item) {
    this.data.push(item);
    this.caseService.updateCase(this.data);
  }
  associateWeapon(item) {
    this.data.push(item);
    this.caseService.updateCase(this.data);
  }
  associateVehicule(item) {
    this.data.push(item);
    this.caseService.updateCase(this.data);
  }


}
