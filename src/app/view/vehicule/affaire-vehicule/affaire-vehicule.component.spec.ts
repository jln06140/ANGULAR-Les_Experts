import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffaireVehiculeComponent } from './affaire-vehicule.component';

describe('AffaireVehiculeComponent', () => {
  let component: AffaireVehiculeComponent;
  let fixture: ComponentFixture<AffaireVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffaireVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffaireVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
