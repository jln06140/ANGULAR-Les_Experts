import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../../../model/vehicule';

@Component({
  selector: 'app-table-vehicule',
  templateUrl: './table-vehicule.component.html',
  styleUrls: ['./table-vehicule.component.css']
})
export class TableVehiculeComponent implements OnInit {
  vehiculeColumns = ['date', 'name', 'brand', 'color', 'licensePlate', 'description'];
  vehiculeSource = generatedListVehicule;
  constructor() { }

  ngOnInit() {
  }

}

const generatedListVehicule: Vehicule[] = [
  {id: 1, date: '02/05/2016', name: 'XS200', brand: 'Peugeot', color: 'bleu',
  licensePlate: '20-AZS-15', description: 'voiture volée', listComment: [],
  listPhoto: [], listCase: [], listTag: []},
  {id: 2, date: '02/05/2010', name: '304', brand: 'Peugeot', color: 'bleu',
  licensePlate: '20-AZS-15', description: 'voiture volée', listComment: [],
  listPhoto: [], listCase: [], listTag: []},
];
