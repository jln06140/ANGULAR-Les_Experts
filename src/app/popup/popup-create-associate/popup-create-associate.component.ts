import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-create-associate',
  templateUrl: './popup-create-associate.component.html',
  styleUrls: ['./popup-create-associate.component.css']
})
export class PopupCreateAssociateComponent implements OnInit {
  sections = ['Pièces à conviction', 'Armes', 'Véhicules'];
  selectedCreate;

  constructor() { }

  ngOnInit() { }

}
