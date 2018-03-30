import { Component, OnInit, Input } from '@angular/core';
import { Vehicule, Case } from '../../core/model';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { PopupAssociateComponent } from '../../popup/popup-associate/popup-associate.component';
import { CaseService } from '../../core/api/case.service';




@Component({
  selector: 'app-associate-vehicule',
  templateUrl: './associate-vehicule.component.html',
  styleUrls: ['./associate-vehicule.component.css']
})
export class AssociateVehiculeComponent implements OnInit {
  vehicule: Vehicule;

  @Input() policeCase: Case;
  constructor(
    public dialogRef: MatDialogRef<PopupAssociateComponent>,
    private caseService: CaseService) {}

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

    onSubmit(vehicule: Vehicule) {
      this.vehicule = vehicule;
      this.policeCase.push(this.vehicule);
      this.caseService.updateCase(this.childPoliceCase);
      this.dialogRef.close();
    }
}
