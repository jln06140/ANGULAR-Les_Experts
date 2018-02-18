import { Component, OnInit } from '@angular/core';
import { AffaireService } from '../../../controller/affaire.service';

@Component({
  selector: 'app-page-affaire',
  templateUrl: './page-affaire.component.html',
  styleUrls: ['./page-affaire.component.css']
})
export class PageAffaireComponent implements OnInit {
  affaire = this.affaireService.selectedAffaire;

  constructor(public affaireService: AffaireService) { }

  ngOnInit() {
  }

}
