import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-affaire',
  templateUrl: './message-affaire.component.html',
  styleUrls: ['./message-affaire.component.css']
})
export class MessageAffaireComponent implements OnInit {
  messageAffaireColumns = ['date', 'description', 'name'];
  messageAffaireSource = generatedListMessageAffaire;

  constructor() { }

  ngOnInit() {
  }

}

// USER TESTING
export interface Message {
  date: string;
  description: string;
  name: string;
}

const generatedListMessageAffaire: Message[] = [
  {date: '21/05/1983', description : 'message 1', name: 'Gérôme'},
  {date: '21/05/1983', description : 'message 2', name: 'Toto'},
];

