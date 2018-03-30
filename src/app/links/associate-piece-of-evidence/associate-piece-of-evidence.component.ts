import { Component, OnInit } from '@angular/core';
import { PieceOfEvidence } from '../../core/model';
import { PopupAssociateComponent } from '../../popup/popup-associate/popup-associate.component';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-associate-piece-of-evidence',
  templateUrl: './associate-piece-of-evidence.component.html',
  styleUrls: ['./associate-piece-of-evidence.component.css']
})
export class AssociatePieceOfEvidenceComponent implements OnInit {
  poe: PieceOfEvidence;

  constructor(public dialogRef: MatDialogRef<PopupAssociateComponent>) {}

  ngOnInit() {
    this.poe = {
      createDate: null,
    updateDate: null,
    type: '',
    serialNumber: '' };
    }

    onSubmit(ngForm: NgForm) {
      this.dialogRef.close();
    }
}
