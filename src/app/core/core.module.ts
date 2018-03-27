import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseService } from './api/case.service';
import { CommentService } from './api/comment.service';
import { PoeService } from './api/poe.service';
import { SuspectService } from './api/suspect.service';
import { VehiculeService } from './api/vehicule.service';
import { VictimService } from './api/victim.service';
import { WeaponService } from './api/weapon.service';
import { WitnessService } from './api/witness.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CaseService,
    CommentService,
    PoeService,
    SuspectService,
    VehiculeService,
    VictimService,
    WeaponService,
    WitnessService
  ]
})
export class CoreModule { }
