import { Component, OnInit } from '@angular/core';
import { PieceOfEvidence } from '../../../model/pieceOfEvidence';


@Component({
  selector: 'app-table-pieceofevidence',
  templateUrl: './table-pieceofevidence.component.html',
  styleUrls: ['./table-pieceofevidence.component.css']
})
export class TablePieceofevidenceComponent implements OnInit {
  pieceOfEvidenceColumns = ['name', 'comment'];
  pieceOfEvidenceSource = generatedListPieceOfEvidence;


  constructor() { }

  ngOnInit() {
  }

}
const generatedListePieceOfEvidence: PieceOfEvidence = [
  {id: 1, name: 'drap ensanglanté', listPhoto: [], comment: ''}
]

]
