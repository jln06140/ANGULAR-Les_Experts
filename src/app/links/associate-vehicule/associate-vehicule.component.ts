import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../../core/model';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { PopupAssociateComponent } from '../../popup/popup-associate/popup-associate.component';




@Component({
  selector: 'app-associate-vehicule',
  templateUrl: './associate-vehicule.component.html',
  styleUrls: ['./associate-vehicule.component.css']
})
export class AssociateVehiculeComponent implements OnInit {
  vehicule: Vehicule;

  constructor(public dialogRef: MatDialogRef<PopupAssociateComponent>) {}

  ngOnInit() {
    this.vehicule = {
      model: '',
      marque: '',
      color: '',
      licensePlate: '',
      createDate: null,
      updateDate: null,
      listCase:  [], };
    }

    onSubmit(ngForm: NgForm) {
      this.dialogRef.close();
    }
}

