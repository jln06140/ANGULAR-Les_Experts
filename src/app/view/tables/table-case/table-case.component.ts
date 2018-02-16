import { Component, OnInit } from '@angular/core';
import { Case } from '../../../model/case';


@Component({
  selector: 'app-table-case',
  templateUrl: './table-case.component.html',
  styleUrls: ['./table-case.component.css']
})
export class TableCaseComponent implements OnInit {
  caseColumns = ['date', 'name', 'comment'];
  caseSource = generatedListCase;


  constructor() { }

  ngOnInit() {
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

