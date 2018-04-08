import { Component, OnInit } from '@angular/core';
import { PieceOfEvidence } from '../../core/model';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from '../../core/api/case.service';
import { Case } from '../../core/model';
import { MatTableDataSource } from '@angular/material';
import { PoeService } from '../../core/api/poe.service';


@Component({
  selector: 'app-table-pieceofevidence',
  templateUrl: './table-pieceofevidence.component.html',
  styleUrls: ['./table-pieceofevidence.component.css']
})
export class TablePieceofevidenceComponent implements OnInit {
  pieceOfEvidenceColumns = ['id', 'type', 'serialNumber', 'edit', 'delete'];
  pieceOfEvidenceSource;


  constructor(private route: ActivatedRoute, private poeService: PoeService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.poeService.getPieceOfEvidencePoliceCase(id).subscribe(
      data => this.pieceOfEvidenceSource = new MatTableDataSource(data));

  }

}


