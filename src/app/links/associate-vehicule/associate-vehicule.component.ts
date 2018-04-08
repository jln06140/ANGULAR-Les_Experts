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

    // initialize an empty vehicule object
  ngOnInit() {
    this.vehicule = {
      model: '',
      marque: '',
      color: '',
      licensePlate: ''};
    }

    onSubmit(ngForm: NgForm) {
      this.policeCase.vehicule.push(ngForm.value); // push the new vehicule into the policeCase Object
      this.caseService.associateCaseItem(this.policeCase).subscribe(); // post request method
      this.dialogRef.close();
    }
}

