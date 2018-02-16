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
  {id: 1, date: '3 février', name: 'Roswell', comment: 'Désastre à la zone 51', listUser: [],
   listPhoto: [], listPoE: [], listVictim: [], listSuspect: [], listWitness: [], listWeapon: [],
    listVehicule: [], listTag: []},
   {id: 1, date: '3 février', name: 'Roswell', comment: 'Désastre à la zone 51', listUser: [],
   listPhoto: [], listPoE: [], listVictim: [], listSuspect: [], listWitness: [], listWeapon: [],
    listVehicule: [], listTag: []},
];

