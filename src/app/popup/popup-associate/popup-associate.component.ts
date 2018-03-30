import { Component, OnInit } from '@angular/core';
import { PoeService } from '../../core/api/poe.service';
import { VehiculeService } from '../../core/api/vehicule.service';
import { WeaponService } from '../../core/api/weapon.service';
import { Vehicule, Weapon, PieceOfEvidence } from '../../core/model';

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
    private poeService: PoeService) { }

  ngOnInit() {
    this.vehiculeService.getVehicules().subscribe(
      data => this.vehicules = data);
    this.weaponService.getWeapons().subscribe(
      data => this.weapons = data);
    this.poeService.getPieceOfEvidences().subscribe(
      data => this.convictions = data);
  }

  associate(data) {
    // this.caseService.associate(data);
  }


}
