import { Component, OnInit, Input } from '@angular/core';
import { PopupAssociateComponent } from '../../popup/popup-associate/popup-associate.component';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Weapon, Case } from '../../core/model';
import { CaseService } from '../../core/api/case.service';


@Component({
  selector: 'app-associate-weapon',
  templateUrl: './associate-weapon.component.html',
  styleUrls: ['./associate-weapon.component.css']
})
export class AssociateWeaponComponent implements OnInit {
  weapon: Weapon;

  @Input() policeCase: Case;
  constructor(
    public dialogRef: MatDialogRef<PopupAssociateComponent>,
    private caseService: CaseService) {}

  // initialize an empty weapon
  ngOnInit() {
    this.weapon = {
      type: '',
      modele: ''};
    }

    onSubmit(ngForm: NgForm) {
      this.policeCase.weapon.push(ngForm.value); // push the new weapon into the policeCase object
      this.caseService.associateCaseItem(this.policeCase).subscribe(); // post request method
      this.dialogRef.close();
    }
}
