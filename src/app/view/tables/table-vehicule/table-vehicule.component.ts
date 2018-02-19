import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../../../model/vehicule';
import { AffaireService } from '../../../controller/affaire.service';
import { PopupService } from '../../../controller/popup.service';

@Component({
  selector: 'app-table-vehicule',
  templateUrl: './table-vehicule.component.html',
  styleUrls: ['./table-vehicule.component.css']
})
export class TableVehiculeComponent implements OnInit {
  vehiculeColumns = ['date', 'name', 'brand', 'color', 'licensePlate', 'description', 'button'];
  vehiculeSource = this.affaireService.selectedAffaire.listVehicule;
  constructor(public affaireService: AffaireService, public popupService: PopupService) { }

  ngOnInit() {}

// ouverture du popup avec le contenu de la ligne en paramètre
  openDialog(row) {
    this.popupService.openDialog(row);
  }

}
