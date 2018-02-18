import { Component, OnInit } from '@angular/core';
import { AffaireService } from '../../../controller/affaire.service';

@Component({
  selector: 'app-table-weapon',
  templateUrl: './table-weapon.component.html',
  styleUrls: ['./table-weapon.component.css']
})
export class TableWeaponComponent implements OnInit {
  weaponColumns = ['date', 'name', 'serial', 'description', 'button'];
  weaponSource = this.affaireService.selectedAffaire.listWeapon;

  constructor(public affaireService: AffaireService) { }

  ngOnInit() {
  }

}
