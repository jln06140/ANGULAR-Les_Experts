import { Component, OnInit } from '@angular/core';
import { Case } from '../../../model/case';
import { AffaireService } from '../../../controller/affaire.service';


@Component({
  selector: 'app-table-case',
  templateUrl: './table-case.component.html',
  styleUrls: ['./table-case.component.css']
})
export class TableCaseComponent implements OnInit {
  caseColumns = ['date', 'name', 'description', 'button'];
  caseSource = this.affaireService.simulatedData;



  constructor(public affaireService: AffaireService) { }

  ngOnInit() {
  }

  selectAffaire(row) {
    this.affaireService.selectAffaire(row);
  }
}

// USER TESTING
const generatedListCase: Case[] = [
  {id: 1, date: '03/02/2018', name: 'Roswell', description: 'Désastre à la zone 51', listComment: [], listUser: [],
  listPhoto: [], listPoE: [], listVictim: [], listSuspect: [], listWitness: [], listWeapon: [],
  listVehicule: [], listTag: []},
  {id: 1, date: '03/02/2018', name: 'Roswell', description: 'Désastre à la zone 51', listComment: [], listUser: [],
  listPhoto: [], listPoE: [], listVictim: [], listSuspect: [], listWitness: [], listWeapon: [],
  listVehicule: [], listTag: []},
];

