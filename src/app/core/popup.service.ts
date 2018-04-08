import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Case } from './model';
import { Vehicule } from './model';
import { Weapon } from './model';
import { PopupVehiculeComponent } from '../popup/popup-vehicule/popup-vehicule.component';
import { PopupDeleteLinkComponent } from '../popup/popup-delete-link/popup-delete-link.component';


@Injectable()
export class PopupService {

  constructor(public dialog: MatDialog) { }

  // open a dialog to edit the vehicule (with the vehicule object as a paramater)
  openEditVehicule(vehicule): void {
    const dialogRef = this.dialog.open(PopupVehiculeComponent, {
      width: '500px',
      data: vehicule,
    });
  }

  // open a dialog to delete the link between the vehicule and the policeCase (with the vehicule object as a parameter )
  openDLinkVehicule(vehicule): void {
    const dialogRef = this.dialog.open(PopupDeleteLinkComponent, {data: vehicule});
  }
}
